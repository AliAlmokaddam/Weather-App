import {ForecastModel} from "@/Domain/Models/forecast.model.ts";
import {PollenDataModel} from "@/Domain/Models/pollen-data.model.ts";
import {WeatherModel} from "@/Domain/Models/weather.model.ts";

export interface WeatherDataSource {
    getForecastWeather(): Promise<ForecastModel[]>;
    getCurrentWeather(): Promise<WeatherModel>;
    getPollenCountData(): Promise<PollenDataModel>;
}
