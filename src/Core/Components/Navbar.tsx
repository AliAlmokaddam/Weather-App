import {Typography} from "antd";

interface NavbarProps {
    city: string;
    date: string;
}

const Navbar = (props: NavbarProps) => {
    const { city, date } = props;

    return (
        <div className="drop-shadow-sm w-full py-4 border-4 border-b-[#D1D5DB] bg-white">
            <div className="flex flex-col sm:ms-[100px] sm:items-start justify-center items-center">
                <Typography.Title level={4} className="!mb-0">{city}</Typography.Title>
                <Typography.Paragraph className="!mb-0 !text-[#737373]">{date}</Typography.Paragraph>
            </div>
        </div>
    );
};

export default Navbar;
