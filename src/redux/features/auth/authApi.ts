import baseApi from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (userData) => {
        return { url: "/auth/signup", method: "POST", body: userData };
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    getAuth: builder.query({
      query: () => ({
        url: "/auth",
        method: "GET",
      }),
    }),
  }),
});

export const { useSignupMutation, useLoginMutation, useGetAuthQuery } = authApi;
