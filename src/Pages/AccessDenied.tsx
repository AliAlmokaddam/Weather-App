import AppLoader from "@/Core/Components/Loaders/AppLoader";
import AccessDeniedLoader from "@/Core/assets/lottie/access-denied.json";
import {Typography} from "antd";

const AccessDenied = () => {
    return (
            <AppLoader Loader={AccessDeniedLoader}>
                <Typography.Title level={5} className="text-center">Please grant location permission to enhance your experience on our website</Typography.Title>
            </AppLoader>
    );
};

export default AccessDenied;
