import {Typography} from "antd";
import "./styles.css"
import WeatherChart from "@/Core/Components/WeatherChart.tsx";
import {WeatherModel} from "@/Domain/Models/weather.model.ts";

interface TemperatureCardProps {
    data: WeatherModel;
}

const TemperatureCard = (props: TemperatureCardProps) => {
    const {data} = props;

    return (
        <div className="temperature-card gap-4 sm:w-[50%] w-full lg:max-h-[200px] flex lg:flex-row flex-col p-5 rounded-2xl lg:min-h-[230px]">
            <div className="lg:w-[40%]">
                <Typography.Title level={5} className="!text-white font-bold">Temperature</Typography.Title>

                <div className="flex items-center flex-col lg:w-[80%] sm:w-full">
                    <img src="src/Core/assets/svg/partly-cloudy.svg" alt="partly-cloudy" />
                    <Typography.Title className="!text-white !mb-0 !mt-0">14 °C</Typography.Title>
                    <Typography.Text className="!text-white !mb-0 !mt-0">Partly Cloudy</Typography.Text>
                </div>
            </div>

            <div className="lg:ms-10 lg:w-[60%] w-full bg-white rounded-md shadow-sm lg:h-full h-[200px] ">
                <WeatherChart data={data.chart_data} />
            </div>
        </div>
    );
};

export default TemperatureCard;
