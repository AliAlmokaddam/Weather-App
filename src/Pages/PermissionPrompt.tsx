import LocationLoader from "@/Core/assets/lottie/location.json";
import AppLoader from "@/Core/Components/Loaders/AppLoader";

const PermissionPrompt = () => {
    return (
        <AppLoader Loader={LocationLoader} />
    );
};

export default PermissionPrompt;
