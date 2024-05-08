import moment from "moment"
import {ForecastEntity} from "@/Data/API/Entities/weather/forecast.entity.ts";
import {ForecastModel} from "@/Domain/Models/forecast.model.ts";
import {formatForecastDate} from "@/Core/helpers/formatForecastDate.ts";
import {CategoryCode} from "@/Core/Enums/CategoryCode.ts";

export const forecastMapper = (payload: ForecastEntity[]): ForecastModel[] => {
    return payload.map(entry => ({
        weather: entry.weatherMain,
        temp: `${entry.tempDay} °C`,
        light_date: formatForecastDate(entry.dt),
        actual_date: moment(entry.dt).format('dddd, MMMM Do, YYYY') as string,
        wind_speed: `${entry.windSpeed} km/h`,
        cloudiness: `${entry.clouds}%`,
        uv_index: entry.uvi.toString(),
        air_pressure: `${Math.ceil(entry.pressure / 1000)} hpa`,
        rain_chance: `${entry.rain}%`,
        humidity: `${entry.humidity}%`,
        light_intensity: entry.lightIntensity?.toString() ?? "0",
        pollen_general: entry?.pollensensePOL?.ppm3?.toString() ?? "0",
        pecan: entry.pollensenseDetails.find(e => e.categoryCode === CategoryCode.CUP)?.category?.level?.toString() ?? null,
        perennial_rye: entry.pollensenseDetails.find(e => e.categoryCode === CategoryCode.LOLMUL)?.category?.level?.toString() ?? null,
        tree: entry.pollensenseDetails.find(e => e.categoryCode === CategoryCode.TRE)?.category?.level?.toString() ?? null,
        grass: entry.pollensenseDetails.find(e => e.categoryCode === CategoryCode.GRA)?.category?.level?.toString() ?? null,
        inorganic_particles: entry.pollensenseDetails.find(e => e.categoryCode === CategoryCode.INO)?.category?.level?.toString() ?? null,
    }))
}