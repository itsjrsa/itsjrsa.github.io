/**
 * Research Data
 *
 * Unified data for all research outputs: journals and conferences.
 * Ordered by year (most recent first).
 */

export const researchData = [
  // ============================================
  // 2025
  // ============================================
  {
    id: 1,
    title: "Dynamic incentives for electric vehicles charging at supermarket stations: Causal insights on demand flexibility",
    authors: "C.A.M. Silva, J.R. Andrade, A. Ferreira, A. Gomes, R.J. Bessa",
    venue: "Energy",
    year: 2025,
    citation: "C.A.M. Silva, J.R. Andrade, A. Ferreira, A. Gomes, R.J. Bessa, \"Dynamic incentives for electric vehicles charging at supermarket stations: causal insights on demand flexibility,\" Energy, vol. 341, pp. 139407, Dec. 2025.",
    abstract: "Electric vehicles (EVs) are crucial in achieving a low-carbon transportation sector and can inherently offer demand-side flexibility by responding to price signals and incentives, yet real-world strategies to influence charging behavior remain limited. This paper combines bilevel optimization and causal machine learning as complementary tools to design and evaluate dynamic incentive schemes as part of a pilot project using a supermarket's EV charging station network. The bilevel model determines discount levels, while double machine learning quantifies the causal impact of these incentives on charging demand. The results indicate a marginal increase of 1.16 kW in charging demand for each one-percentage-point increase in discount. User response varies by hour and weekday, revealing treatment effect heterogeneity, insights that can inform business decision-making. While the two methods are applied independently, their combined use provides a framework for connecting optimization-based incentive design with data-driven causal evaluation. By isolating the impact of incentives from other drivers, the study sheds light on the potential of incentives to enhance demand-side flexibility in the electric mobility ecosystem.",
    image: null,
    tags: ["electric vehicles", "causal inference", "double machine learning", "smart charging"],
    category: "journal",
    link: "https://www.sciencedirect.com/science/article/pii/S0360544225050492",
    size: "medium"
  },
  {
    id: 2,
    title: "Graph neural networks for fault location in large photovoltaic power plants",
    authors: "O. Klyagina, C. Silva, A. Silva, T. Guedes, J.R. Andrade, R.J. Bessa",
    venue: "IEEE PowerTech 2025",
    year: 2025,
    citation: "O. Klyagina, C. Silva, A. Silva, T. Guedes, J.R. Andrade, R.J. Bessa, \"Graph neural networks for fault location in large photovoltaic power plants,\" IEEE PowerTech 2025 Conference, Kiel, Germany, 29 June-3 July 2025.",
    abstract: null,
    image: null,
    tags: ["graph neural networks", "photovoltaic", "fault location"],
    category: "conference",
    link: "https://ieeexplore.ieee.org/abstract/document/11180616",
    size: "small"
  },
  {
    id: 3,
    title: "Synthetic data generation for wind energy forecasting: Comparison between statistical and deep learning models",
    authors: "O. Klyagina, W. Xia, J.R. Andrade, P.P. Vergara, R.J. Bessa",
    venue: "IEEE SMC 2025",
    year: 2025,
    citation: "O. Klyagina, W. Xia, J.R. Andrade, P.P. Vergara, R.J. Bessa, \"Synthetic data generation for wind energy forecasting: Comparison between statistical and deep learning models,\" 2025 IEEE International Conference on Systems, Man, and Cybernetics (SMC), Vienna, Austria, 5-8 October 2025.",
    abstract: null,
    image: null,
    tags: ["synthetic data", "wind energy", "forecasting", "deep learning"],
    category: "conference",
    link: "",
    size: "small"
  },

  // ============================================
  // 2024
  // ============================================
  {
    id: 4,
    title: "Enhancing the European power system resilience with a recommendation system for voluntary demand response",
    authors: "J.R. Andrade, C. Gouveia, R. Silva, et al.",
    venue: "iScience",
    year: 2024,
    citation: "J.R. Andrade, C. Gouveia, R. Silva, et al., \"Enhancing the European power system resilience with a recommendation system for voluntary demand response,\" iScience, vol. 27, no. 12, pp. 111430, Dec. 2024.",
    abstract: "Climate change, geopolitical tensions, and decarbonization targets are bringing the resilience of the European electric power system to the forefront of discussion. Among various regulatory and technological solutions, voluntary demand response can help balance generation and demand during periods of energy scarcity or renewable energy generation surplus. This work presents an open data service called Interoperable Recommender that leverages publicly accessible data to calculate a country-specific operational balancing risk, providing actionable recommendations to empower citizens toward adaptive energy consumption, considering interconnections and local grid constraints. Using semantic interoperability, it enables third-party services to enhance energy management and customize applications to consumers. Real-world pilots in Portugal, Greece, and Croatia with over 300 consumers demonstrated the effectiveness of providing signals across diverse contexts. For instance, in Portugal, 7% of the hours included actionable recommendations, and metering data revealed a consumption decrease of 4% during periods when consumers were requested to lower consumption.",
    image: null,
    tags: ["demand response", "power system resilience", "open data", "semantic interoperability"],
    category: "journal",
    link: "https://doi.org/10.1016/j.isci.2024.111430",
    size: "medium"
  },
  {
    id: 5,
    title: "ML-assistant for human operators using alarm data to solve and classify faults in electrical grids",
    authors: "V. Campos, O. Klyagina, J.R. Andrade, R.J. Bessa, C. Gouveia",
    venue: "Electric Power Systems Research",
    year: 2024,
    citation: "V. Campos, O. Klyagina, J.R. Andrade, R.J. Bessa, C. Gouveia, \"ML-assistant for human operators using alarm data to solve and classify faults in electrical grids,\" Electric Power Systems Research, vol. 236, pp. 110886, Nov. 2024.",
    abstract: null,
    image: null,
    tags: ["machine learning", "SCADA", "fault classification", "power systems"],
    category: "journal",
    link: "https://www.sciencedirect.com/science/article/pii/S0378779624007727",
    size: "small"
  },
  {
    id: 6,
    title: "Uncertainty-aware procurement of flexibilities for electrical grid operational planning",
    authors: "R.J. Bessa, F. Moaidi, J. Viana, J.R. Andrade",
    venue: "IEEE Transactions on Sustainable Energy",
    year: 2024,
    citation: "R.J. Bessa, F. Moaidi, J. Viana, J.R. Andrade, \"Uncertainty-aware procurement of flexibilities for electrical grid operational planning,\" IEEE Transactions on Sustainable Energy, vol. 15, no. 2, pp. 789-802, Apr. 2024.",
    abstract: null,
    image: null,
    tags: ["flexibility", "grid planning", "uncertainty", "optimization"],
    category: "journal",
    link: "https://ieeexplore.ieee.org/document/10221712",
    size: "small"
  },

  // ============================================
  // 2022
  // ============================================
  {
    id: 7,
    title: "Data-Driven Anomaly Detection and Event Log Profiling of SCADA Alarms",
    authors: "J.R. Andrade, C. Rocha, R. Silva, J.P. Viana, R.J. Bessa, C. Gouveia, B. Almeida, R.J. Santos, M. Louro, P.M. Santos, A.F. Ribeiro",
    venue: "IEEE Access",
    year: 2022,
    citation: "J.R. Andrade, C. Rocha, R. Silva, J.P. Viana, R.J. Bessa, C. Gouveia, B. Almeida, R.J. Santos, M. Louro, P.M. Santos, A.F. Ribeiro, \"Data-driven anomaly detection and event log profiling of SCADA alarms,\" IEEE Access, vol. 10, pp. 73758-73773, 2022.",
    abstract: "Network human operators' decision-making during grid outages requires significant attention and the ability to perceive real-time feedback from multiple information sources to minimize the number of control actions required to restore service, while maintaining the system and people safety. Data-driven event and alarm management have the potential to reduce human operator cognitive burden. However, the high complexity of events, the data semantics, and the large variety of equipment and technologies are key barriers for the application of Artificial Intelligence (AI) to raw Supervisory Control and Data Acquisition (SCADA) data. In this context, this paper proposes a methodology to convert a large volume of alarm events into data mining terminology, creating the conditions for the application of modern AI techniques to alarm data. Moreover, this work also proposes two novel data-driven applications based on SCADA data: (i) identification of anomalous behaviors regarding the performance of the protection relays of primary substations, during circuit breaker tripping alarms in High Voltage (HV) and Medium Voltage (MV) lines; (ii) unsupervised learning to cluster similar events in HV line panels, classify new event logs based on the obtained clusters and membership grade with a control parameter that helps to identify rare events. Important aspects associated with data handling and pre-processing are also covered.",
    image: null,
    tags: ["SCADA", "anomaly detection", "power systems", "unsupervised learning"],
    category: "journal",
    link: "https://doi.org/10.1109/ACCESS.2022.3190398",
    size: "medium"
  },
  {
    id: 8,
    title: "ML-assistant for human operators to solve faults and classify events complexity in electrical grids",
    authors: "V. Campos, J.R. Andrade, R.J. Bessa, C. Gouveia",
    venue: "MEDPOWER 2022",
    year: 2022,
    citation: "V. Campos, J.R. Andrade, R.J. Bessa, C. Gouveia, \"ML-assistant for human operators to solve faults and classify events complexity in electrical grids,\" 13th Mediterranean Conference on Power Generation, Transmission, Distribution and Energy Conversion (MEDPOWER), Malta, 7-9 Nov. 2022.",
    abstract: null,
    image: null,
    tags: ["machine learning", "fault resolution", "event classification"],
    category: "conference",
    link: "https://ieeexplore.ieee.org/document/10137616",
    size: "small"
  },

  // ============================================
  // 2021
  // ============================================
  {
    id: 9,
    title: "Functional Scalability and Replicability Analysis for Smart Grid Functions: The InteGrid Project Approach",
    authors: "S. Potenciano Menci, R.J. Bessa, B. Herndler, et al.",
    venue: "Energies",
    year: 2021,
    citation: "S. Potenciano Menci, R.J. Bessa, B. Herndler, C. Korner, B. Rao, F. Leimgruber, A. Madureira, D. Rua, F. Coelho, J. Silva, J.R. Andrade, G. Sampaio, H. Teixeira, M. Simões, J. Viana, L. Oliveira, D. Castro, U. Krisper, R. André, \"Functional Scalability and Replicability Analysis for Smart Grid Functions: The InteGrid Project Approach,\" Energies, vol. 14, no. 18, pp. 5685, 2021.",
    abstract: null,
    image: null,
    tags: ["smart grid", "scalability", "replicability", "InteGrid"],
    category: "journal",
    link: "https://www.mdpi.com/1996-1073/14/18/5685",
    size: "small"
  },
  {
    id: 10,
    title: "A Deep Learning Method for Forecasting Residual Market Curves",
    authors: "A. Coronati, J.R. Andrade, R.J. Bessa",
    venue: "Electric Power Systems Research",
    year: 2021,
    citation: "A. Coronati, J.R. Andrade, R.J. Bessa, \"A deep learning method for forecasting residual market curves,\" Electric Power Systems Research, vol. 190, pp. 106756, Jan. 2021.",
    abstract: "Forecasts of residual demand curves (RDCs) are valuable information for price-maker market agents since it enables an assessment of their bidding strategy in the market-clearing price. This paper describes the application of deep learning techniques, namely long short-term memory (LSTM) network that combines past RDCs and exogenous variables (e.g., renewable energy forecasts). The main contribution is to build up on the idea of transforming the temporal sequence of RDCs into a sequence of images, avoiding any feature reduction and exploiting the capability of LSTM in handling image data. The proposed method was tested with data from the Iberian day-ahead electricity market and outperformed machine learning models with an improvement of above 35% in both root mean square error and Frechet distance.",
    image: null,
    tags: ["electricity markets", "deep learning", "LSTM", "price forecasting"],
    category: "journal",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0378779620305599",
    size: "medium"
  },
  {
    id: 11,
    title: "Innovative applications of artificial intelligence on SCADA data",
    authors: "B. Almeida, R.J. Santos, M. Louro, P.M. Santos, A.F. Ribeiro, R.J. Bessa, C. Gouveia, J.R. Andrade, R.E. Silva, C.N. Rocha, J.P. Viana",
    venue: "CIRED 2021",
    year: 2021,
    citation: "B. Almeida, R.J. Santos, M. Louro, P.M. Santos, A.F. Ribeiro, R.J. Bessa, C. Gouveia, J.R. Andrade, R.E. Silva, C.N. Rocha, J.P. Viana, \"Innovative applications of artificial intelligence on SCADA data,\" 26th International Conference & Exhibition on Electricity Distribution (CIRED 2021), 20-23 September 2021.",
    abstract: null,
    image: null,
    tags: ["artificial intelligence", "SCADA", "distribution grids"],
    category: "conference",
    link: "https://ieeexplore.ieee.org/document/9692855",
    size: "small"
  },

  // ============================================
  // 2018
  // ============================================
  {
    id: 12,
    title: "Data economy for prosumers in a smart grid ecosystem",
    authors: "R.J. Bessa, D. Rua, C. Abreu, P. Machado, J.R. Andrade, R. Pinto, C. Gonçalves, M. Reis",
    venue: "e-Energy 2018",
    year: 2018,
    citation: "R.J. Bessa, D. Rua, C. Abreu, P. Machado, J.R. Andrade, R. Pinto, C. Gonçalves, M. Reis, \"Data economy for prosumers in a smart grid ecosystem,\" in Proc. of the e-Energy '18: The Nineth International Conference on Future Energy Systems, June 12-15, 2018, Karlsruhe, Germany.",
    abstract: null,
    image: null,
    tags: ["data economy", "prosumers", "smart grid"],
    category: "conference",
    link: "https://dl.acm.org/doi/10.1145/3208903.3210282",
    size: "small"
  },

  // ============================================
  // 2017
  // ============================================
  {
    id: 13,
    title: "Probabilistic Price Forecasting for Day-Ahead and Intraday Markets: Beyond the Statistical Model",
    authors: "J.R. Andrade, J. Filipe, M. Reis, R.J. Bessa",
    venue: "Sustainability",
    year: 2017,
    citation: "J.R. Andrade, J. Filipe, M. Reis, R.J. Bessa, \"Probabilistic Price Forecasting for Day-Ahead and Intraday Markets: Beyond the Statistical Model,\" Sustainability, vol. 9, no. 11, p. 1990, Oct. 2017.",
    abstract: null,
    image: null,
    tags: ["price forecasting", "electricity markets", "probabilistic forecasting"],
    category: "journal",
    link: "https://www.mdpi.com/2071-1050/9/11/1990",
    size: "small"
  },
  {
    id: 14,
    title: "Improving Renewable Energy Forecasting with a Grid of Numerical Weather Predictions",
    authors: "J.R. Andrade, R.J. Bessa",
    venue: "IEEE Transactions on Sustainable Energy",
    year: 2017,
    citation: "J.R. Andrade, R.J. Bessa, \"Improving renewable energy forecasting with a grid of numerical weather predictions,\" IEEE Trans. Sustain. Energy, vol. 8, no. 4, pp. 1571-1580, 2017.",
    abstract: "In the last two decades, renewable energy forecasting progressed towards the development of advanced physical and statistical algorithms aiming at improving point and probabilistic forecast skill. This paper describes a forecasting framework to explore information from a grid of numerical weather predictions (NWP) applied to both wind and solar energy. The methodology combines the gradient boosting trees algorithm with feature engineering techniques that extract the maximum information from the NWP grid. Compared to a model that only considers one NWP point for a specific location, the results show an average point forecast improvement (in terms of mean absolute error) of 16.09% and 12.85% for solar and wind power respectively. The probabilistic forecast improvement, in terms of continuous ranking probabilistic score, was 13.11% and 12.06% respectively.",
    image: null,
    tags: ["renewable energy", "forecasting", "numerical weather prediction", "wind power"],
    category: "journal",
    link: "https://ieeexplore.ieee.org/document/7903735",
    size: "medium"
  }
]
