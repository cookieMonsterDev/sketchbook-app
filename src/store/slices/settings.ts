import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SettingsState {
  brush_color: string;
  background_color: string;
  brush_size: number;
}

const initialState: SettingsState = {
  brush_color: "black",
  background_color: "white",
  brush_size: 3,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    changeBrushColor(state, { payload }: PayloadAction<string>) {
      state.brush_color = payload;
    },
    changeBackgroundColor(state, { payload }: PayloadAction<string>) {
      state.background_color = payload;
    },
    changeBrushSize(state, { payload }: PayloadAction<number>) {
      state.brush_size = payload;
    },
  },
});

export const { changeBrushColor, changeBackgroundColor, changeBrushSize } =
  settingsSlice.actions;

export default settingsSlice.reducer;
