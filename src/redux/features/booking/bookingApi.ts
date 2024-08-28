import baseApi from "../../api/baseApi";

const bookingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addBooking: builder.mutation({
      query: (data) => {
        return { url: "/bookings", method: "POST", body: data };
      },
      //   invalidatesTags: ["facility"],
    }),
  }),
});

export const { useAddBookingMutation } = bookingApi;
