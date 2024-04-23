import { createStore, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { devToolsEnhancer } from "@redux-devtools/extension";

import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["contacts"], // Поля, які потрібно зберігати у локальному сховищі
};

// Створення персистентного редюсера
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Створення store з персистентним редюсером
const store = createStore(persistedReducer, devToolsEnhancer());

// Створення persistor для PersistGate
const persistor = persistStore(store);

export { store, persistor };
