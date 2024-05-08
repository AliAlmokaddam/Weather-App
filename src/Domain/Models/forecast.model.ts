export interface ForecastModel {
    weather: string;
    temp: string;

    light_date: string;
    actual_date: string;
    wind_speed: string;
    cloudiness: string;
    uv_index: string;
    air_pressure: string;
    rain_chance: string;
    humidity: string;
    light_intensity: string;
    pollen_general: string;
    pecan: string | null;
    perennial_rye: string | null;
    tree: string | null;
    grass: string | null;
    inorganic_particles: string | null;
}