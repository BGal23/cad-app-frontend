import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface I18nState {
  language: string;
}

const savedLanguage = localStorage.getItem("i18n")
  ? JSON.parse(localStorage.getItem("i18n")!).language
  : "pl";

const initialState: I18nState = {
  language: savedLanguage,
};

const i18nSlice = createSlice({
  name: "i18n",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = i18nSlice.actions;
export default i18nSlice.reducer;
