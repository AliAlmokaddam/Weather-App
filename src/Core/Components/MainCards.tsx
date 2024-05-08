import {useEffect, useRef} from 'react';
import {changeSlide} from "@/Core/Store/Reducers/app-reducer.ts";
import {useDispatch, useSelector} from "react-redux";
import TemperatureCard from "@/Core/Components/TemperatureCard.tsx";
import PollenCard from "@/Core/Components/PollenCard.tsx";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import {currentSlide} from "@/Core/Store/Selectors/app-selectors.ts";
import {WeatherModel} from "@/Domain/Models/weather.model.ts";
import {PollenDataModel} from "@/Domain/Models/pollen-data.model.ts";

interface WeatherCardProps {
    weather: WeatherModel;
    pollen: PollenDataModel
}

const MainCards = (props: WeatherCardProps) => {
    const { weather, pollen } = props;
    const dispatch = useDispatch();
    const initSwiper = useRef(false)
    const destroySwiper = useRef(false)
    const activeSlide = useSelector(currentSlide) ?? 0;

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= 576 && !initSwiper.current) {
                dispatch(changeSlide(0))
                initSwiper.current = true
                destroySwiper.current = false
            } else if(width >= 576 && !destroySwiper.current) {
                dispatch(changeSlide(undefined))
                destroySwiper.current = true
                initSwiper.current = false
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [dispatch])

    return (
        <>
                <div className="sm:flex mt-5 gap-5 hidden">
                    <TemperatureCard data={weather} />
                    <PollenCard data={pollen} />
                </div>

                <div className="flex mt-5 gap-5 sm:hidden">
                    {activeSlide != undefined  &&
                        <Swiper
                            initialSlide={0}
                            onDestroy={() => dispatch(changeSlide(undefined))}
                            pagination={true} modules={[Pagination]}
                            className="main-swiper" spaceBetween={10}
                            onSlideChange={(swiper) => dispatch(changeSlide(swiper.activeIndex))}
                        >
                            <SwiperSlide className="main-slide">
                                <TemperatureCard data={weather} />
                            </SwiperSlide>
                            <SwiperSlide className="main-slide">
                                <PollenCard data={pollen} />
                            </SwiperSlide>
                        </Swiper>}
                </div>
        </>
    );
};

export default MainCards;
