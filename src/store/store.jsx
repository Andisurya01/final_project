import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import moduleCourses from "./moduleCourses"

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, moduleCourses);


const store = configureStore({
    reducer: {
        module: persistedReducer,
    }
});

export const persistor = persistStore(store);
export default store;