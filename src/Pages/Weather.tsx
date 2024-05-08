import Navbar from "@/Core/Components/Navbar.tsx";
import AppLoader from "@/Core/Components/Loaders/AppLoader";
import {useGetCurrentLocation} from "@/Domain/UseCases/get-current-location.usecase.tsx";
import MainCards from "@/Core/Components/MainCards.tsx";
import PollenDetails from "@/Core/Components/PollenDetails.tsx";
import WeatherDetails from "@/Core/Components/WeatherDetails.tsx";
import FutureForecast from "@/Core/Components/FutureForecast.tsx";
import Loader from "@/Core/assets/lottie/init-loading.json";
import {useGetForecast} from "@/Domain/UseCases/get-forecast.usecase.tsx";
import {useGetPollenData} from "@/Domain/UseCases/get-pollen-count.usecase.tsx";
import {useGetCurrentWeather} from "@/Domain/UseCases/get-current-weather.usecase.tsx";

const Weather = () => {
    const { data: location, isPending } = useGetCurrentLocation();
    const { data: weather, isPending: isWeatherPending } = useGetCurrentWeather();
    const { data: forecast, isPending: isForecastPending } = useGetForecast();
    const { data: pollen, isPending: isPollenPending } = useGetPollenData();

    if(isPending || isForecastPending || isPollenPending || isWeatherPending) return  <AppLoader Loader={Loader} />

    else if(location && forecast && pollen && weather)
        return (
            <div className="flex flex-col items-center">
                <Navbar city={location.city} date={location.date} />
                <div className="xl:w-[70%] w-full xl:px-0 px-5">
                    <MainCards pollen={pollen} weather={weather} />
                    <FutureForecast forecast={forecast} />
                    <div className="flex gap-3 mb-10">
                        <WeatherDetails forecast={forecast} />
                        <PollenDetails forecast={forecast} />
                    </div>
                </div>
            </div>
        );
};

export default Weather;
