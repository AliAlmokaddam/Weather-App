import {CategoryCode} from "@/Core/Enums/CategoryCode.ts";
import {Category} from "@/Data/API/Entities/weather/category.entity.ts";

export interface HourChart {
    timestamp:    Date;
    ppm3:         number;
    misery:       number;
    categoryCode: CategoryCode;
    category:     Category;
}