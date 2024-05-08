import {RootState} from "@/Core/Store";

export const cords = (state: RootState) => state.app.cords;
export const currentSlide = (state: RootState) => state.app.currentSlide;
export const selectedForecast = (state: RootState) => state.app.selectedForecastIdx;
