import {CategoryCode} from "@/Core/Enums/CategoryCode.ts";
import {Category} from "@/Data/API/Entities/weather/category.entity.ts";
import {WeatherMain} from "@/Core/Enums/WeatherMain.ts";

export interface ForecastEntity {
    dt:                 Date;
    summary:            string;
    tempDay:            number;
    tempMin:            number;
    tempMax:            number;
    weatherMain:        WeatherMain;
    weatherDescription: string;
    weatherId:          number;
    clouds:             number;
    windSpeed:          number;
    windDeg:            number;
    humidity:           number;
    uvi:                number;
    pressure:           number;
    rain:               number | null;
    lightIntensity:     number | null;
    pollensensePOL?:    PollensensePOL;
    pollensenseDetails: PollensenseDetail[];
}

export interface PollensenseDetail {
    timestamp:      Date;
    ppm3Averages:   number | null;
    ppm3Highs:      number;
    ppm3Lows:       number;
    miseryAverages: number;
    miseryHighs:    number;
    miseryLows:     number;
    categoryCode:   string;
    category:       Category | null;
}


export interface PollensensePOL {
    timestamp:       Date;
    ppm3?:           number;
    misery?:         number;
    categoryCode:    CategoryCode;
    category:        Category;
    ppm3Averages?:   number;
    ppm3Highs?:      number;
    ppm3Lows?:       number;
    miseryAverages?: number;
    miseryHighs?:    number;
    miseryLows?:     number;
}
