import {WeatherDescription} from "@/Core/Enums/WeatherDescription.ts";
import {WeatherMain} from "@/Core/Enums/WeatherMain.ts";

export interface WeatherEntity {
    airTemperature:     number;
    iconId:             number;
    weatherDescription: WeatherDescription;
    tempMin:            number;
    tempMax:            number;
    windSpeed:          number;
    windDeg:            number;
    dayChart:           DayChart[];
}

export interface DayChart {
    dt:                 Date;
    temp:               number;
    weatherId:          number;
    weatherMain:        WeatherMain;
    weatherDescription: WeatherDescription;
}
