const base = import.meta.env.BASE_URL

const projects = [
  {
    name: "Rapido Ride Analysis: Understanding Demand, Cancellations & Revenue",
    description: "Analyzed 50,000 ride-level transactions from Bangalore to uncover patterns in ride demand, cancellation behavior, and revenue distribution. Developed an end-to-end ETL pipeline to process raw data and implemented statistical analysis to identify high-cancellation zones and peak-hour bottlenecks, enabling data-driven driver allocation strategies.",
    image: `${base}Rapido_Ride_Analysis_Dashboard.png`,
    tags: ["Python", "Pandas", "Tableau Public", "Statistical Analysis", "ETL"],
    github: "https://github.com/Aniket-bit7/SectionA_G1_Rapido_Ride_Analysis"
    },
  {
    name: "Intelligent Abnormal Electricity Usage Detection",
    description: "Designed a district-level anomaly detection framework for residential electricity consumption in Kerala. Analyzed usage deviations across 10,800 records to identify high-risk districts and abnormal patterns, enabling proactive resource allocation for energy authorities.",
    image: `${base}Electricity_Anomaly_Dashboard.png`,
    tags: ["Excel", "Pivot Tables", "Tableau", "Anomaly Detection"],
    github: "https://github.com/aaneesa/Section-D_Group-3_Intelligent_abnormal_electricity_usage"
  },
  {
    name: "Amsterdam Airbnb Market Performance & Revenue Intelligence",
    description: "Analyzed 10,361 Airbnb listings in Amsterdam across 20+ neighborhoods to identify key drivers of occupancy and revenue performance. Developed a KPI-driven analytical framework and an interactive revenue intelligence dashboard in Google Sheets to translate raw listing data into actionable pricing and occupancy insights for hosts.",
    image: `${base}Dashboard.png`,
    tags: ["Google Sheets", "Pivot Tables", "Data Visualization", "Market Analysis", "KPI Framework"],
    github: "https://github.com/Aniket-bit7/dva-capstone"
    },
    
]

export default projects

