import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Cords {
    latitude: number,
    longitude: number
}

interface AppState {
    cords: Cords | null;
    currentSlide: number | undefined;
    selectedForecastIdx: number;
}

const initialState: AppState = {
    cords: null,
    currentSlide: undefined,
    selectedForecastIdx: 0
};

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setCords: (state, action: PayloadAction<Cords>) => {
            state.cords = {...action.payload};
        },
        resetCords: (state) => {
            state.cords = null
        },
        changeSlide: (state, action: PayloadAction<number | undefined>) => {
            state.currentSlide = action.payload
        },
        setForecast: (state, action: PayloadAction<number>) => {
            state.selectedForecastIdx = action.payload;
        },
    },
});

export const { setCords, resetCords, changeSlide, setForecast } = appSlice.actions;
export const appReducer = appSlice.reducer;
