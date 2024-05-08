import { PollenDataModel } from "@/Domain/Models/pollen-data.model.ts";
import { PollenDataEntity } from "@/Data/API/Entities/weather/pollen.entity.ts";
import moment from "moment";

export const pollenDataMapper = (payload: PollenDataEntity): PollenDataModel => {
    const hours = Array.from({ length: 25 }, (_, i) => i.toString().padStart(2, "0"));

    const chartData = hours.map((hour) => {
        const existingEntry = payload.hourChart.find(
            (entry) => moment(entry.timestamp).hour().toString() === hour
        );

        return {
            y: existingEntry ? existingEntry.ppm3 : 0,
            x: hour,
        };
    });

    return {
        pollen_general: payload.ppm3.toString(),
        status: "",
        chartData: [{
            id: "pollen",
            color: "hsl(267, 70%, 50%)",
            data: chartData,
        }],
    };
};
