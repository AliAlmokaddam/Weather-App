import {CategoryCode} from "@/Core/Enums/CategoryCode.ts";
import {Category} from "@/Data/API/Entities/weather/category.entity.ts";
import {HourChart} from "@/Data/API/Entities/weather/hour-chart.entity.ts";
import {DailyChart} from "@/Data/API/Entities/weather/daily-chart.entity.ts";

export interface PollenDataEntity {
    timestamp:    Date;
    ppm3:         number;
    misery:       number;
    categoryCode: CategoryCode;
    category:     Category;
    hourChart:    HourChart[];
    dailyChart:   DailyChart[];
}
