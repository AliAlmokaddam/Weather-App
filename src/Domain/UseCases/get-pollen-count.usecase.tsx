import { useQuery } from '@tanstack/react-query';
import {QueryKey} from "@/Core/Enums/QueryKey.ts";
import {weatherService} from "@/Data/API/WeatherApiDataSourceImpl.ts";

export const useGetPollenData = () => {
    return useQuery({
        queryKey: [QueryKey.PollenCount],
        queryFn: () => weatherService.getPollenCountData(),
    })
}
