import ApiService from "@/Core/API/APIService.ts";
import {app_stage, customerNumber} from "@/Core/Constants";
import {WeatherDataSource} from "@/Data/WeatherDataSource.ts";
import {ForecastModel} from "@/Domain/Models/forecast.model.ts";
import {ForecastEntity} from "@/Data/API/Entities/weather/forecast.entity.ts";
import {PollenDataEntity} from "@/Data/API/Entities/weather/pollen.entity.ts";
import {WeatherEntity} from "@/Data/API/Entities/weather/weather.entity.ts";
import {WeatherModel} from "@/Domain/Models/weather.model.ts";
import {PollenDataModel} from "@/Domain/Models/pollen-data.model.ts";
import {currentWeatherMapper} from "@/Data/API/Mappers/weather.mapper.ts";
import {forecastMapper} from "@/Data/API/Mappers/forecast.mapper.ts";
import {pollenDataMapper} from "@/Data/API/Mappers/pollen-data.mapper.ts";

class WeatherApiDataSourceImpl extends ApiService implements WeatherDataSource {
    constructor() {
        super({ baseURL: `/${app_stage}/public/weatherapp/${customerNumber}` });
    }

    async getForecastWeather(): Promise<ForecastModel[]> {
        const response = await this.get<ForecastEntity[]>("/forecast");
        return forecastMapper(response);
    }

    async getPollenCountData(): Promise<PollenDataModel> {
        const response = await this.get<PollenDataEntity>("/pollencount");
        return pollenDataMapper(response);
    }

    async getCurrentWeather(): Promise<WeatherModel> {
        const response = await this.get<WeatherEntity>("/current");
        return currentWeatherMapper(response);
    }
}

export const weatherService = new WeatherApiDataSourceImpl();
