export interface WeatherModel {
    temperature: string;
    wind: string;
    highest_temperature: string;
    lowest_temperature: string;
    chart_data: WeatherChartModel[];
}

export interface WeatherChartModel {
    id: string | number
    data: any
    [key: string]: any
}