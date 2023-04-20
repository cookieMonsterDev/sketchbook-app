import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SettingsState {
  brush_color: string;
  background_color: string;
}

const initialState: SettingsState = {
  brush_color: 'black',
  background_color: 'white'
}

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
  },
});

export const { changeBrushColor, changeBackgroundColor } =
  settingsSlice.actions;

export default settingsSlice.reducer;