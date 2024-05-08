import {Progress, Typography} from "antd";
import "./styles.css"
import PollenChart from "@/Core/Components/PollenChart.tsx";
import {PollenDataModel} from "@/Domain/Models/pollen-data.model.ts";

interface PollenCardProps {
    data: PollenDataModel;
}

const PollenCard = (props: PollenCardProps) => {
    const {data} = props;

    return (
        <div className="pollen-card relative gap-4 lg:max-h-[200px] sm:w-[50%] w-full flex lg:flex-row flex-col p-5 rounded-2xl h-[435px] lg:min-h-[230px]">
                <div className="flex flex-col gap-4 lg:w-[40%]">
                    <Typography.Title level={5} className="!text-white font-bold mb-4">Pollen Count</Typography.Title>
                    <div className="flex justify-center w-full">
                        <Progress
                            className="ms-4 z-0"
                            strokeWidth={4}
                            gapDegree={180}
                            strokeLinecap="round"
                            type="dashboard"
                            strokeColor="#FB923C"
                            percent={(Number(data.pollen_general) / 10) * 2}
                            size={200}
                            format={() => <div className="flex flex-col gap-2">
                                {(Number(data.pollen_general) / 10)}
                                <Typography.Title level={5} className="!text-white">
                                    Moderate
                                </Typography.Title>
                            </div>
                            }
                        />
                    </div>
                </div>

            <div className="lg:ms-10 lg:w-[60%] w-[calc(100% - 1.2rem)] bg-white rounded-md shadow-sm lg:h-full h-[200px] z-1 lg:relative absolute lg:bottom-0 r-[1.2rem] bottom-5" style={{ width: 'calc(100% - 2.4rem)' }}>
                <PollenChart data={data.chartData} />
            </div>
        </div>
    );
};

export default PollenCard;
