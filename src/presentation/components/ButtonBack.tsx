import { useRouter } from "expo-router";
import { CustomButton } from "./CustomButton";

export const BackScreen = ()=> {
    const router = useRouter();

    return(
        <CustomButton title='Voltar' onPress={() => router.back()} />
    );
};
