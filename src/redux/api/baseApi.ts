import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "../store";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://sport-facilify-modify.vercel.app/api",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    } else {
      console.log("not found token");
    }
    return headers;
  },
});

const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["facility"],
  baseQuery,
  endpoints: () => ({}),
});

export default baseApi;
