import {configureStore} from "@reduxjs/toolkit";
import {listenerMiddleware} from "@/Core/Store/middlewares/save-location.middleware.ts";
import {appReducer} from "@/Core/Store/Reducers/app-reducer.ts";

const appState = JSON.parse(localStorage.getItem("cords") || "null");

const store = configureStore({
    preloadedState: {
        app: appState === null ? { cords: null } : appState
    },
    reducer: {
        app: appReducer
    },
    // @ts-ignore
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        listenerMiddleware.middleware
    ]
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
