import baseApi from "../../api/baseApi";

const facilitiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacilities: builder.query({
      query: () => ({
        url: "/facility",
        method: "GET",
      }),
    }),

    addFacility: builder.mutation({
      query: (data) => {
        return { url: "/facility", method: "POST", body: data };
      },
    }),

    deleteFacilities: builder.mutation({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
      }),
    }),
    updateFacilities: builder.mutation({
      query: ({ data, id }) => ({
        url: `/facility/${id}`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useAddFacilityMutation,
  useGetFacilitiesQuery,
  useDeleteFacilitiesMutation,
  useUpdateFacilitiesMutation,
} = facilitiesApi;
