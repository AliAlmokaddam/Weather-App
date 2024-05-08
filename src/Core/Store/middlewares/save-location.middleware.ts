import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import type { RootState } from "../index";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
    matcher: isAnyOf(),
    effect: (_, listenerApi) =>
        localStorage.setItem(
            "cords",
            JSON.stringify((listenerApi.getState() as RootState).app.cords)
        )
});
