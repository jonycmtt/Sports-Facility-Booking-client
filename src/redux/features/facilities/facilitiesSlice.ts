import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TAuthState = {
  filter: {
    minPrice?: number | undefined;
    maxPrice?: number | undefined;
  };
  search?: string | undefined;
};

const initialState: TAuthState = {
  filter: { minPrice: 0, maxPrice: 0 },
  search: "",
};

const facilitySlice = createSlice({
  name: "availability",
  initialState,
  reducers: {
    setSearch: (
      state,
      action: PayloadAction<{ search: string | undefined }>
    ) => {
      const { search } = action.payload;
      state.search = search;
    },
    setFilter: (state, action: PayloadAction<TAuthState>) => {
      const filter = action.payload.filter;
      state.filter.minPrice = filter.minPrice;
      state.filter.maxPrice = filter.maxPrice;
    },
  },
});

export const { setSearch, setFilter } = facilitySlice.actions;
export default facilitySlice.reducer;
