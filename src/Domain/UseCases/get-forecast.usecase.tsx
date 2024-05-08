import { useQuery } from '@tanstack/react-query';
import {QueryKey} from "@/Core/Enums/QueryKey.ts";
import {weatherService} from "@/Data/API/WeatherApiDataSourceImpl.ts";

export const useGetForecast = () => {
    return useQuery({
        queryKey: [QueryKey.Forecast],
        queryFn: () => weatherService.getForecastWeather(),
    })
}
