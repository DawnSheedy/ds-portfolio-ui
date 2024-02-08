import { createApi } from "@reduxjs/toolkit/query/react";
import { portfolioBaseQuery } from "./portfolioBaseQuery";
import { StatusResponse } from "../../model/StatusResponse";

/**
 * Base api for portfolio servicer
 */
export const portfolioServiceApi = createApi({
  baseQuery: portfolioBaseQuery(),
  tagTypes: ["Status"],
  endpoints: (build) => ({
    getPortfolioServiceStatus: build.query<StatusResponse, void>({
      query: () => ({
        url: "status",
      }),
      providesTags: (response) => [{ id: "STATUS", type: "Status" }],
    }),
  }),
});

export const { useGetPortfolioServiceStatusQuery } = portfolioServiceApi;
