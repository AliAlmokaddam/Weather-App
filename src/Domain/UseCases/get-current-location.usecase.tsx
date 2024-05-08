import { useQuery } from '@tanstack/react-query';
import {QueryKey} from "@/Core/Enums/QueryKey.ts";
import {locationService} from "@/Data/API/LocationApiDataSourceImpl.ts";

export const useGetCurrentLocation = () => {
    return useQuery({
        queryKey: [QueryKey.Location],
        queryFn: () => locationService.getCurrentLocation(),
    })
}
