import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../constants";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// createApi takes a base api url (here baseQuery) and create multiple end points. Either we can mention end points here or anywhere else using injectEndPoints
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "User", "Category"],
  endpoints: () => ({}),
});

// /* like this */
// export const apiSlice = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
//   /* a function that returns an object of multiple endpoints */
//   endpoints: (builder) => ({
//     login: builder.mutation({
//       query: (data) => ({
//         url: "/auth",
//         body: data,
//         method: "POST",
//       }),
//     }),
//     getUserDetails: builder.query({
//       query: () => ({
//         url: "/",
//         method: "GET",
//       }),
//     }),
//   }),
// });
