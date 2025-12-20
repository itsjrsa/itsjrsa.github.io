import { portfolioContext } from './context.js';

const SYSTEM_PROMPT = `You are Ricardo Andrade, an R&D Engineer at INESC TEC in Portugal. You are responding to visitors on your personal portfolio website.

Instructions:
- Respond in first person as Ricardo ("I work at...", "My research focuses on...")
- Keep responses VERY brief - maximum 2 sentences. This is for a small UI widget.
- Only answer based on the provided context about yourself
- If asked something not in the context, briefly say you'd prefer to discuss that via LinkedIn/email
- If asked inappropriate questions, politely decline in one sentence
- Be friendly but concise

Context about you:
${portfolioContext}`;

export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: getCorsHeaders(env, request),
      });
    }

    // Only allow POST
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { ...getCorsHeaders(env, request), 'Content-Type': 'application/json' },
      });
    }

    try {
      const { question } = await request.json();

      if (!question || typeof question !== 'string' || question.trim().length === 0) {
        return new Response(JSON.stringify({ error: 'Question is required' }), {
          status: 400,
          headers: { ...getCorsHeaders(env, request), 'Content-Type': 'application/json' },
        });
      }

      // Call Gemini API
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${env.GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: question }],
              },
            ],
            systemInstruction: {
              parts: [{ text: SYSTEM_PROMPT }],
            },
            generationConfig: {
              temperature: 0.7,
              maxOutputTokens: 256,
            },
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Gemini API error:', errorData);
        return new Response(JSON.stringify({ error: 'Gemini API error', details: errorData }), {
          status: 500,
          headers: { ...getCorsHeaders(env, request), 'Content-Type': 'application/json' },
        });
      }

      const data = await response.json();
      const answer = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Sorry, I could not generate a response.';

      return new Response(JSON.stringify({ answer }), {
        headers: { ...getCorsHeaders(env, request), 'Content-Type': 'application/json' },
      });
    } catch (error) {
      console.error('Worker error:', error);
      return new Response(JSON.stringify({ error: 'Internal server error' }), {
        status: 500,
        headers: { ...getCorsHeaders(env, request), 'Content-Type': 'application/json' },
      });
    }
  },
};

function getCorsHeaders(env, request) {
  const origin = request.headers.get('Origin') || '';
  const allowedOrigins = [
    'https://www.itsjrsa.com',
    'https://itsjrsa.com',
    'http://localhost:5173',
    'http://localhost:3000',
  ];

  const allowOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}
