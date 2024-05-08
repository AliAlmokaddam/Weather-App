import {Typography} from "antd";
import DetailsCard from "@/Core/Components/DetailsCard.tsx";
import {useSelector} from "react-redux";
import {currentSlide, selectedForecast} from "@/Core/Store/Selectors/app-selectors.ts";
import {ForecastModel} from "@/Domain/Models/forecast.model.ts";

interface PollenDetailsProps {
    forecast: ForecastModel[];
}

const PollenDetails= (props: PollenDetailsProps) => {
    const { forecast } = props;
    const activeSlide = useSelector(currentSlide) ?? 0;
    const activeIdx = useSelector(selectedForecast) ?? 0

    return (
        <div
            className={`mt-9 gap-5  shadow-md rounded-xl p-4 bg-[#F9FAFB] w-[45%] flex-1 sm:block ${activeSlide == 1 ? "block" : "hidden"}`}>
            <div className="flex md:flex-row flex-col md:items-center gap-3 mb-5">
                <Typography.Title level={5} className="!mb-0">Pollen Details</Typography.Title>
                <Typography.Text className="!mb-0">{forecast[activeIdx].actual_date}</Typography.Text>
            </div>

            <div className="gap flex flex-col gap-4 flex-wrap lg:max-h-[400px]">
                <DetailsCard icon="pollen" data={forecast[activeIdx].pollen_general} title="Pollen General" arrow="down"
                             subTitle={forecast[activeIdx].pollen_general} type="pollen"/>
                <DetailsCard icon="pecan" data={forecast[activeIdx].pecan ?? 0} title="Pecan" arrow="down"
                             subTitle={forecast[activeIdx].pecan ?? 0} type="pollen"/>
                <DetailsCard icon="perennial-rye" data={forecast[activeIdx].perennial_rye ?? 0} title="Perennial rye" arrow="up"
                             subTitle={forecast[activeIdx].perennial_rye ?? 0} type="pollen" />
                <DetailsCard icon="tree" data={forecast[activeIdx].tree ?? 0} title="Tree" arrow="up"
                             subTitle={forecast[activeIdx].tree ?? 0} type="pollen"/>
                <DetailsCard icon="grass" data={forecast[activeIdx].grass ?? 0} title="Grass" arrow="down"
                             subTitle={forecast[activeIdx].grass ?? 0} type="pollen"/>
                <DetailsCard icon="inogranic-particles" data={forecast[activeIdx].inorganic_particles ?? 0} title="Inorganic particles"
                             arrow="down"
                             subTitle={forecast[activeIdx].inorganic_particles ?? 0} type="pollen"/>
            </div>
        </div>
    );
};

export default PollenDetails
