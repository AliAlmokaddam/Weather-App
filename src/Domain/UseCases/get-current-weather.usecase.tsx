import { useQuery } from '@tanstack/react-query';
import {QueryKey} from "@/Core/Enums/QueryKey.ts";
import {weatherService} from "@/Data/API/WeatherApiDataSourceImpl.ts";

export const useGetCurrentWeather = () => {
    return useQuery({
        queryKey: [QueryKey.Weather],
        queryFn: () => weatherService.getCurrentWeather(),
    })
}
