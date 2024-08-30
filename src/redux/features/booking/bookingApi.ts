import baseApi from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBooking: builder.query({
      query: (id) => {
        if (id) {
          return { url: `/bookings/${id}`, method: "GET" };
        }
        return { url: "/bookings", method: "GET" };
      },
      providesTags: ["facility"],
    }),

    addBooking: builder.mutation({
      query: (data) => {
        return { url: "/bookings", method: "POST", body: data };
      },
      invalidatesTags: ["facility"],
    }),
    cancelBooking: builder.mutation({
      query: (id) => {
        return { url: `/bookings/${id}`, method: "DELETE" };
      },
      invalidatesTags: ["facility"],
    }),
  }),
});

export const {
  useAddBookingMutation,
  useGetBookingQuery,
  useCancelBookingMutation,
} = bookingApi;
