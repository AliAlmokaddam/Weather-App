import {CurrentLocationEntity} from "@/Data/API/Entities/location/current-location.entity.ts";
import {CurrentLocationModel} from "@/Domain/Models/current-location.model.ts";
import moment from "moment"

export const currentLocationMapper = (payload: CurrentLocationEntity): CurrentLocationModel => {
    return {
        city: payload.name,
        date: moment.unix(payload.dt).format('dddd, MMMM D, YYYY')
    }
}