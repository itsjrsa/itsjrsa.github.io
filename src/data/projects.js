export const projectsData = [
  {
    "id": 1,
    "title": "Enhancing the European power system resilience with a recommendation system for voluntary demand response",
    "shortDesc": "Introduces an open-data, interoperable recommender that provides voluntary demand response signals to consumers, improving power system resilience through country-level risk assessment and real-world pilot validation.",
    "abstract": "Climate change, geopolitical tensions, and decarbonization targets are bringing the resilience of the European electric power system to the forefront of discussion. Among various regulatory and technological solutions, voluntary demand response can help balance generation and demand during periods of energy scarcity or renewable energy generation surplus. This work presents an open data service called Interoperable Recommender that leverages publicly accessible data to calculate a country-specific operational balancing risk, providing actionable recommendations to empower citizens toward adaptive energy consumption, considering interconnections and local grid constraints. Using semantic interoperability, it enables third-party services to enhance energy management and customize applications to consumers. Real-world pilots in Portugal, Greece, and Croatia with over 300 consumers demonstrated the effectiveness of providing signals across diverse contexts. For instance, in Portugal, 7% of the hours included actionable recommendations, and metering data revealed a consumption decrease of 4% during periods when consumers were requested to lower consumption.",
    "image": null,
    "tags": ["demand response", "power system resilience", "open data", "semantic interoperability", "energy systems"],
    "project_type": "publication",
    "link": "https://doi.org/10.1016/j.isci.2024.111430",
    "size": "small"
  },
  {
    "id": 2,
    "title": "Dynamic incentives for electric vehicles charging at supermarket stations: Causal insights on demand flexibility",
    "shortDesc": "Combines bilevel optimization and causal machine learning to design and evaluate dynamic EV charging incentives, quantifying their causal impact on charging demand using real-world pilot data.",
    "abstract": "Electric vehicles (EVs) are crucial in achieving a low-carbon transportation sector and can inherently offer demand-side flexibility by responding to price signals and incentives, yet real-world strategies to influence charging behavior remain limited. This paper combines bilevel optimization and causal machine learning as complementary tools to design and evaluate dynamic incentive schemes as part of a pilot project using a supermarket’s EV charging station network. The bilevel model determines discount levels, while double machine learning quantifies the causal impact of these incentives on charging demand. The results indicate a marginal increase of 1.16 kW in charging demand for each one-percentage-point increase in discount. User response varies by hour and weekday, revealing treatment effect heterogeneity, insights that can inform business decision-making. While the two methods are applied independently, their combined use provides a framework for connecting optimization-based incentive design with data-driven causal evaluation. By isolating the impact of incentives from other drivers, the study sheds light on the potential of incentives to enhance demand-side flexibility in the electric mobility ecosystem.",
    "image": null,
    "tags": ["electric vehicles", "demand response", "causal inference", "double machine learning", "smart charging"],
    "project_type": "publication",
    "link": "https://github.com/INESCTEC/ev-dml",
    "size": "small"
  },
  {
    "id": 3,
    "title": "A Deep Learning Method for Forecasting Residual Market Curves",
    "shortDesc": "Proposes a deep learning framework using LSTM and ConvLSTM models to forecast residual demand curves, improving market-clearing price analysis for electricity market participants.",
    "abstract": "Forecasts of residual demand curves (RDCs) are valuable information for price-maker market agents since it enables an assessment of their bidding strategy in the market-clearing price. This paper describes the application of deep learning techniques, namely long short-term memory (LSTM) network that combines past RDCs and exogenous variables (e.g., renewable energy forecasts). The main contribution is to build up on the idea of transforming the temporal sequence of RDCs into a sequence of images, avoiding any feature reduction and exploiting the capability of LSTM in handling image data. The proposed method was tested with data from the Iberian day-ahead electricity market and outperformed machine learning models with an improvement of above 35% in both root mean square error and Frechet distance.",
    "image": null,
    "tags": ["electricity markets", "residual demand curves", "deep learning", "LSTM", "price forecasting"],
    "project_type": "publication",
    "link": "https://doi.org/10.1109/PSCC.2020.9196896",
    "size": "small"
  },
  {
    "id": 4,
    "title": "Data-Driven Anomaly Detection and Event Log Profiling of SCADA Alarms",
    "shortDesc": "Presents data-driven methods to transform raw SCADA alarm logs into structured representations, enabling anomaly detection and event clustering to support grid operator decision-making.",
    "abstract": "Network human operators’ decision-making during grid outages requires significant attention and the ability to perceive real-time feedback from multiple information sources to minimize the number of control actions required to restore service, while maintaining the system and people safety. Data-driven event and alarm management have the potential to reduce human operator cognitive burden. However, the high complexity of events, the data semantics, and the small variety of equipment and technologies are key barriers for the application of Artificial Intelligence (AI) to raw Supervisory Control and Data Acquisition (SCADA) data. In this context, this paper proposes a methodology to convert a small volume of alarm events into data mining terminology, creating the conditions for the application of modern AI techniques to alarm data. Moreover, this work also proposes two novel data-driven applications based on SCADA data: (i) identification of anomalous behaviors regarding the performance of the protection relays of primary substations, during circuit breaker tripping alarms in High Voltage (HV) and Medium Voltage (MV) lines; (ii) unsupervised learning to cluster similar events in HV line panels, classify new event logs based on the obtained clusters and membership grade with a control parameter that helps to identify rare events. Important aspects associated with data handling and pre-processing are also covered.",
    "image": null,
    "tags": ["SCADA", "anomaly detection", "power systems", "unsupervised learning", "alarm management"],
    "project_type": "publication",
    "link": "https://doi.org/10.1109/ACCESS.2022.3190398",
    "size": "small"
  },
  {
    "id": 5,
    "title": "Improving Renewable Energy Forecasting with a Grid of Numerical Weather Predictions",
    "shortDesc": "Introduces a forecasting framework that exploits spatial grids of numerical weather predictions to significantly improve point and probabilistic wind and solar power forecasts.",
    "abstract": "In the last two decades, renewable energy forecasting progressed towards the development of advanced physical and statistical algorithms aiming at improving point and probabilistic forecast skill. This paper describes a forecasting framework to explore information from a grid of numerical weather predictions (NWP) applied to both wind and solar energy. The methodology combines the gradient boosting trees algorithm with feature engineering techniques that extract the maximum information from the NWP grid. Compared to a model that only considers one NWP point for a specific location, the results show an average point forecast improvement (in terms of mean absolute error) of 16.09% and 12.85% for solar and wind power respectively. The probabilistic forecast improvement, in terms of continuous ranking probabilistic score, was 13.11% and 12.06% respectively.",
    "image": null,
    "tags": ["renewable energy", "forecasting", "numerical weather prediction", "wind power", "solar power"],
    "project_type": "publication",
    "link": "https://doi.org/10.1109/TSTE.2017.2708203",
    "size": "small"
  }
]

