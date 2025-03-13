import { Reducer, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import { Storage } from "redux-persist/es/types";
import storage from "redux-persist/lib/storage";
import themeReducer from "./theme/themeSlice";
import i18nReducer from "./i18n/i18nSlice";

interface Persist {
  key: string;
  storage: Storage;
}

const themePersistConfig: Persist = {
  key: "theme",
  storage: storage,
};

const i18nPersistConfig: Persist = {
  key: "i18n",
  storage: storage,
};

export const store = configureStore({
  reducer: {
    theme: persistReducer(themePersistConfig, themeReducer) as Reducer,
    i18n: persistReducer(i18nPersistConfig, i18nReducer) as Reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
