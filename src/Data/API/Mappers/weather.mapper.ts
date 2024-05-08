import {WeatherEntity} from "@/Data/API/Entities/weather/weather.entity.ts";
import moment from "moment/moment";
import {WeatherModel} from "@/Domain/Models/weather.model.ts";

export const currentWeatherMapper = (payload: WeatherEntity): WeatherModel => {
    const hours = Array.from({ length: 25 }, (_, i) => i.toString().padStart(2, "0"));

    const chartData = hours.map((hour) => {
        const existingEntry = payload.dayChart.find(
            (entry) => moment(entry.dt).hour().toString() === hour
        );

        return {
            y: existingEntry ? existingEntry.temp : 0,
            x: hour,
        };
    });

    return {
        temperature: `${payload.airTemperature} °C`,
        highest_temperature: `${payload.tempMax} °C`,
        lowest_temperature: `${payload.tempMin} °C`,
        wind: `${payload.windSpeed} km/h`,
        chart_data: [{
            id: "weather",
            color: "hsl(267, 70%, 50%)",
            data: chartData,
        }],
    }
}