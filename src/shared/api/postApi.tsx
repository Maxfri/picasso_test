import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Posts } from "../types/types";

export const postApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Posts[], void>({
      query: () => `/posts`,
    }),
    getPost: builder.query<Posts, string>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetPostsQuery, useGetPostQuery } = postApi;
