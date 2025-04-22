import { Button, TextInput, TextInputComponent } from "react-native";
import { Text, View } from "react-native";
import { CustomButton } from "../components/CustomButton";
import { useState } from "react";
import { BackScreen } from "../components/ButtonBack";
import styled from "styled-components/native";
import { CustomInput } from "../components/CustomInput";

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #282849;
`;

const Title = styled.Text`
    font-size: 40px;
    font-weight: bold;
    color: #FFFFFF;
`;

const ContainerInput = styled.View`
    width: 70%;
`;

export default function LoginScreen(){
    const [text, setText] = useState<string>();
    /*<TextInput
        onChangeText={(newText: string) => setText(newText)}
        placeholder="Digite aqui"
       />
    */

    return(
        <Container>
            
            <Title>Log In</Title>
            <ContainerInput>
                <CustomInput title={"Username"}/>
            </ContainerInput>
            <ContainerInput>
                <CustomInput title={"Password"}/>
            </ContainerInput>
            <ContainerInput>
                <CustomButton title="Log In" onPress={() => {}}/>
            </ContainerInput>

            <Text>Don't have an account?</Text>
            <Text>Sign up</Text>
        </Container>
    );
}