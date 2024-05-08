import {CoordEntity} from "@/Data/API/Entities/location/coord.entity.ts";
import {WeatherEntity} from "@/Data/API/Entities/location/weather.entity.ts";
import {MainEntity} from "@/Data/API/Entities/location/main.entity.ts";
import {WindEntity} from "@/Data/API/Entities/location/wind.entity.ts";
import {RainEntity} from "@/Data/API/Entities/location/rain.entity.ts";
import {CloudsEntity} from "@/Data/API/Entities/location/clouds.entity.ts";
import {SysEntity} from "@/Data/API/Entities/location/sys.entity.ts";

export interface CurrentLocationEntity {
    coord:      CoordEntity;
    weather:    WeatherEntity[];
    base:       string;
    main:       MainEntity;
    visibility: number;
    wind:       WindEntity;
    rain:       RainEntity;
    clouds:     CloudsEntity;
    dt:         number;
    sys:        SysEntity;
    timezone:   number;
    id:         number;
    name:       string;
    cod:        number;
}