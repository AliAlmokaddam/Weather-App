export interface PollenDataModel {
    pollen_general: string;
    status: string;
    chartData: PollenChartData[];
}

export interface PollenChartData {
    id: string | number
    data: any
    [key: string]: any
}