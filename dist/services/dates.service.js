import pool from "../database.js";
// Get first and last date from database
export const getDates = async () => {
    const queryString = "SELECT MIN(n.date) as startDate, MAX(n.date) as endDate\
    FROM news n\
    INNER JOIN sentiments s ON n.id = s.news_id;";
    const result = await pool.query(queryString);
    const dates = await result.rows[0];
    const dateRange = {};
    // re-format and null-check
    if (dates.startdate && dates.enddate) {
        (dateRange.startDate = dates.startdate),
            (dateRange.endDate = dates.enddate);
    }
    return dateRange;
};
//# sourceMappingURL=dates.service.js.map