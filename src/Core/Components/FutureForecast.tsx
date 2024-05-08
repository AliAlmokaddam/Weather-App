import {Typography} from "antd";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import ForecastCard from "@/Core/Components/ForecastCard.tsx";
import {WeatherStatus} from "@/Core/Enums/WeatherStatus.ts";
import {PollenStatus} from "@/Core/Enums/PollenStatus.ts";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {ForecastModel} from "@/Domain/Models/forecast.model.ts";

interface FutureForecastProps {
    forecast: ForecastModel[];
}

const FutureForecast = (props: FutureForecastProps) => {
    const {forecast} = props;

    return (
            <div className="mt-9 gap-5 shadow-md rounded-xl bg-[#F9FAFB] p-4">
                <div className="flex md:items-center md:flex-row flex-col gap-3 mb-5">
                    <Typography.Title level={5} className="!mb-0">Future Forecast</Typography.Title>
                    <Typography.Text className="!mb-0">Click on a daily card to see detailed forecasts.</Typography.Text>
                </div>

                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    slidesPerView="auto"
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}>
                    {forecast.map((e, idx) => (
                        <SwiperSlide className="forecast-card">
                        <ForecastCard
                            key={e.light_date}
                            idx={idx}
                            date={e.light_date}
                            weather={{
                                status: e.weather,
                                temp: e.temp,
                                icon: e.weather as WeatherStatus
                            }}
                            pollen={{
                                status: "High",
                                val: e.pollen_general,
                                icon: PollenStatus.HIGH
                            }}
                        />
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
    );
};

export default FutureForecast;
