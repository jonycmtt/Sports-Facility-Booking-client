import baseApi from "../../api/baseApi";

const facilitiesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getFacilities: builder.query({
      query: (id) => {
        if (id) {
          return { url: `/facility/${id}`, method: "GET" };
        }
        return { url: "/facility", method: "GET" };
      },
      providesTags: ["facility"],
    }),

    addFacility: builder.mutation({
      query: (data) => {
        return { url: "/facility", method: "POST", body: data };
      },
      invalidatesTags: ["facility"],
    }),

    deleteFacilities: builder.mutation({
      query: (id) => ({
        url: `/facility/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["facility"],
    }),
    updateFacilities: builder.mutation({
      query: ({ data, id }) => ({
        url: `/facility/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["facility"],
    }),
  }),
});

export const {
  useAddFacilityMutation,
  useGetFacilitiesQuery,
  useDeleteFacilitiesMutation,
  useUpdateFacilitiesMutation,
} = facilitiesApi;
