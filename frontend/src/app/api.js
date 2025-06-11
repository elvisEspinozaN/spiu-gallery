// base RTK query api - develop when working with admin, auth, and booking
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL }),
  tagTypes: ["Artwork"],
  endpoints: (builder) => ({
    getArtwork: builder.query({
      query: (style) => `/artwork${style ? `?style=${style}` : ""}`,
      providesTags: ["Artwork"],
    }),
  }),
});

export const { useGetArtworkQuery } = api;
