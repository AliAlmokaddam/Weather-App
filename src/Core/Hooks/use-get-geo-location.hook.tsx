import {useEffect} from "react";
import {notifier} from "@/Core/Utils/notifier.tsx";
import {ResponseStatus} from "@/Core/Enums/ResponseStatus.ts";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {resetCords, setCords} from "@/Core/Store/Reducers/app-reducer.ts";

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
};

export const useGetGeoLocation = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()

    function success(pos: GeolocationPosition) {
        const crd = pos.coords;
        dispatch(setCords({latitude: crd.latitude, longitude: crd.longitude}))
    }

    function errors(err: GeolocationPositionError) {
        notifier(err.message, ResponseStatus.error);
        dispatch(resetCords());
        navigate("/access-denied");
    }


    useEffect(() => {
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: "geolocation" })
                .then(function (result) {
                    if (result.state === "granted") {
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    } else if (result.state === "prompt") {
                        navigate("/give-me-permission");
                        navigator.geolocation.getCurrentPosition(success, errors, options);
                    }
                });
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }, []);
}