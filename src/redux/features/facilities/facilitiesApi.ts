import baseApi from "../../api/baseApi";

const facilitiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addFacility: builder.mutation({
      query: (data) => {
        return { url: "/facility", method: "POST", body: data };
      },
    }),
    getFacilities: builder.query({
      query: () => ({
        url: "/facility",
        method: "GET",
      }),
    }),
    deleteFacilities: builder.mutation({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddFacilityMutation,
  useGetFacilitiesQuery,
  useDeleteFacilitiesMutation,
} = facilitiesApi;
