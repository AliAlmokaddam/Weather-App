import {Typography} from "antd";
import DetailsCard from "@/Core/Components/DetailsCard.tsx";
import {useSelector} from "react-redux";
import {currentSlide, selectedForecast} from "@/Core/Store/Selectors/app-selectors.ts";
import {ForecastModel} from "@/Domain/Models/forecast.model.ts";

interface WeatherDetailsProps {
    forecast: ForecastModel[]
}

const WeatherDetails = (props: WeatherDetailsProps) => {
    const { forecast } = props;
    const activeSlide = useSelector(currentSlide) ?? 0;
    const activeIdx = useSelector(selectedForecast) ?? 0

    return (
        <div
            className={`mt-9 gap-5 shadow-md rounded-xl p-4 bg-[#F9FAFB] sm:block flex-1 ${activeSlide == 0 ? "block" : "hidden"}`}>
            <div className="flex md:flex-row flex-col  md:items-center gap-3 mb-5">
                <Typography.Title level={5} className="!mb-0">Weather Details</Typography.Title>
                <Typography.Text className="!mb-0">{forecast[activeIdx].actual_date}</Typography.Text>
            </div>
            <div className="gap flex flex-col gap-4 flex-wrap lg:max-h-[400px]">
                <DetailsCard icon="Wind" data={forecast[activeIdx].wind_speed} title="Wind Speed" arrow="down"
                             subTitle={forecast[activeIdx].wind_speed} />
                <DetailsCard icon="Cloudy" data={forecast[activeIdx].cloudiness} title="Cloudiness" arrow="down"
                             subTitle={forecast[activeIdx].cloudiness}/>
                <DetailsCard icon="Sunny" data={forecast[activeIdx].temp} title="UV Index" arrow="up"
                             subTitle={forecast[activeIdx].temp}/>
                <DetailsCard icon="Air_Pressure" data={forecast[activeIdx].air_pressure} title="Air Pressure" arrow="up"
                             subTitle={forecast[activeIdx].air_pressure}/>
                <DetailsCard icon="Rain" data={forecast[activeIdx].rain_chance} title="Rain Chance" arrow="down"
                             subTitle={forecast[activeIdx].rain_chance}/>
                <DetailsCard icon="Humidity" data={forecast[activeIdx].humidity} title="Humidity" arrow="down"
                             subTitle={forecast[activeIdx].humidity}/>
                <DetailsCard icon="dashboard" data={forecast[activeIdx].light_intensity} title="Light Intensity" arrow="up"
                             subTitle={forecast[activeIdx].light_intensity}/>
            </div>
        </div>
    );
};

export default WeatherDetails;
