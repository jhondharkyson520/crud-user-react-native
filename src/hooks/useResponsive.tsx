import { useWindowDimensions } from "react-native";

export const useResponsive = () => {
    const {width, height} = useWindowDimensions();
    return {width, height};
};

