import baseApi from "../../api/baseApi";

const facilitiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAvailability: builder.query({
      query: (date) => {
        console.log(date);
        return { url: `/check-availability?date=${date}}`, method: "GET" };
      },
      // providesTags: ["facility"],
    }),
  }),
});

export const { useGetAvailabilityQuery } = facilitiesApi;
