import { fetchBaseQuery } from "@reduxjs/toolkit/query";

/**
 * Base query for portfolio cals
 * @returns 
 */
export const portfolioBaseQuery = () => {
  return fetchBaseQuery({ baseUrl: "/ds-portfolio-service/" });
};
