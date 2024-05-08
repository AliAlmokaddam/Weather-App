import {Typography} from "antd";
import {ArrowDownOutlined, ArrowUpOutlined} from "@ant-design/icons";
import "./styles.css"

interface DetailsCardProps {
    title: string,
    subTitle: string | number,
    data: string | number;
    icon: string;
    arrow: "up" | "down",
    type?: "weather" | "pollen"
}

const DetailsCard = (props: DetailsCardProps) => {
    const {title, subTitle, icon, arrow, data, type = "weather"} = props;

    return (
        <div className="flex border rounded-xl bg-[#F3F4F6] p-3 justify-between shadow-md" style={{border: "1px solid #E5E7EB"}}>
            <div className="flex-2 flex gap-2">
                <img alt={title} src={`src/Core/assets/${type}-details/${icon}.svg`} />
                <div className="flex flex-col gap-2">
                    <Typography.Text className="m-0">{title}</Typography.Text>
                    <Typography.Title className="!mt-0 !mb-0" level={5}>{subTitle}</Typography.Title>
                </div>
            </div>

            <div className="flex h-full justify-end items-end mt-8 gap-2">
                {arrow == "down" ? <ArrowDownOutlined className="down" /> : <ArrowUpOutlined />}
                <Typography.Text className="mb-0 text-[#6B7280]">{data}</Typography.Text>
            </div>
        </div>
    );
};

export default DetailsCard;
