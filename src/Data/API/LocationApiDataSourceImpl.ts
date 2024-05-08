import ApiService from "@/Core/API/APIService.ts";
import {CurrentLocationEntity} from "@/Data/API/Entities/location/current-location.entity.ts";
import {LocationDataSource} from "@/Data/LocationApiDataSource.ts";
import {CurrentLocationModel} from "@/Domain/Models/current-location.model.ts";
import {apiKey, locationApiUrl} from "@/Core/Constants";
import store from "@/Core/Store";
import {currentLocationMapper} from "@/Data/API/Mappers/location.mapper.ts";

class LocationApiDataSourceImpl extends ApiService implements LocationDataSource {
    constructor() {
        super({ baseURL: "/weather", mainUrl: locationApiUrl });
    }

    async getCurrentLocation(): Promise<CurrentLocationModel> {
        const response = await this.get<CurrentLocationEntity>("", { params: {
                appid: apiKey,
                lon: store.getState().app.cords?.longitude,
                lat: store.getState().app.cords?.latitude,
            } });
        return currentLocationMapper(response);
    }
}

export const locationService = new LocationApiDataSourceImpl();
