import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";

type TAuthState = {
  date: string | undefined;
};

const initialState: TAuthState = {
  date: "",
};

const availabilitySlice = createSlice({
  name: "availability",
  initialState,
  reducers: {
    setDate: (
      state,
      action: PayloadAction<{ dateString: string | undefined }>
    ) => {
      const { dateString } = action.payload;
      if (dateString && dayjs(dateString).isValid()) {
        const formattedDate = dayjs(dateString).format("YYYY-MM-DD");
        state.date = formattedDate;
      } else {
        state.date = undefined; // Or handle this case as needed
      }
    },
  },
});

export const { setDate } = availabilitySlice.actions;
export default availabilitySlice.reducer;
