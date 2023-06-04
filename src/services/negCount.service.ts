import pool from "../database.js";

// Takes start date and end date as strings
// Querys databse for count of negative labels and total labels grouped by regoin
// Returns [{neg, total, region}]
export const getNegCount = async (startDate: string, endDate: string) => {
  const queryString = `SELECT 
        COUNT(case when s."label" = 'NEG' then 1 END) as NEG, 
        COUNT(s."label") as TOTAL,
    n.region
    FROM public.news n
    JOIN public.sentiments s ON s.news_id = n.id
    WHERE n."date" >= '${startDate}' AND n."date" <= '${endDate}'
    group by n.region;  `;

  const result = await pool.query(queryString);

  const news = await result.rows;

  // Select only the labels and regions
  const sentiments = news.map((item) => {
    return {
      neg: item.neg,
      total: item.total,
      region: item.region,
    };
  });

  return sentiments;
};
