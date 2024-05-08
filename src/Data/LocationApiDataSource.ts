import {CurrentLocationModel} from "@/Domain/Models/current-location.model.ts";

export interface LocationDataSource {
    getCurrentLocation(): Promise<CurrentLocationModel>;
}
