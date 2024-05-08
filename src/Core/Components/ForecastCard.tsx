import { Divider, Typography} from "antd";
import {WeatherStatus} from "@/Core/Enums/WeatherStatus.ts";
import {PollenStatus} from "@/Core/Enums/PollenStatus.ts";
import {useDispatch, useSelector} from "react-redux";
import {currentSlide, selectedForecast} from "@/Core/Store/Selectors/app-selectors.ts";
import {setForecast} from "@/Core/Store/Reducers/app-reducer.ts";


interface ForecastCardProps {
    idx: number,
    date: string;
    weather: {
        status: string;
        temp: string | number;
        icon: WeatherStatus;
    };
    pollen: {
      status: string;
      val: string | number;
      icon: PollenStatus
    }
}

const ForecastCard = (props: ForecastCardProps) => {
    const {date, weather, idx, pollen} = props;
    const activeSlide = useSelector(currentSlide);
    const currIdx = useSelector(selectedForecast) ?? 0;
    const dispatch = useDispatch();

    return (
        <div onClick={() => dispatch(setForecast(idx))} className="cursor-pointer rounded-2xl bg-white py-3  sm:min-w-[200px] sm:max-w-[200px] shadow-sm" style={{border: `1px solid ${currIdx != idx ? "#E5E7EB" : "#3730A3"}`}}>
            <div className="w-full flex justify-center items-center mb-4">
                <Typography.Text>{date}</Typography.Text>
            </div>

            <div className="w-full flex justify-center items-center">
                <div className={`flex flex-col items-center justify-center gap-2 sm:min-w-[49%] sm:max-w-[49%] ${activeSlide === 1 ? "hidden" : "flex"}`}>
                    <img alt={weather.status} src={`src/Core/assets/svg/${weather.icon}.svg`} className="w-[60px]" />
                    <Typography.Text>{weather.temp}</Typography.Text>
                    <Typography.Text className="text-gray-400 !text-[12px]">{weather.status}</Typography.Text>
                </div>
                <Divider type="vertical" style={{height: "10em", borderInlineStart: "1px solid #D4D4D4"}} className={`${activeSlide == undefined ? "block" : "hidden"}`} />
                <div className={`sm:w-[50%] ${activeSlide === 0 ? "hidden" : "flex"}`}>
                    <div className={`flex flex-col items-center gap-2 min-w-[49%] h-full ${activeSlide === 0 ? "hidden" : "flex"}`}>
                        <img alt={pollen.status} src={`src/Core/assets/svg/${pollen.icon}.svg`} className="m-4" />
                        <Typography.Text>{pollen.val}</Typography.Text>
                        <Typography.Text className="text-gray-400 !text-[12px]">{pollen.status}</Typography.Text>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForecastCard;
