import {CategoryCode} from "@/Core/Enums/CategoryCode.ts";
import {Category} from "@/Data/API/Entities/weather/category.entity.ts";

export interface DailyChart {
    timestamp:      Date;
    ppm3Averages:   number;
    ppm3Highs:      number;
    ppm3Lows:       number;
    miseryAverages: number;
    miseryHighs:    number;
    miseryLows:     number;
    categoryCode:   CategoryCode;
    category:       Category;
}