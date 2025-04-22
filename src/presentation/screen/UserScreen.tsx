import { View, Text } from "react-native";
import { CustomButton } from "../components/CustomButton";
import { useResponsive } from "@/src/hooks/useResponsive";
import { useRouter } from "expo-router";
import styled from "styled-components/native";
import { BackScreen } from "../components/ButtonBack";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Title = styled.Text`
  font-size: ${(props: any) => (props.screenWidth > 400 ? '24px' : '18px')};
  color: #c73535;
`;


export function UserScreen() {
  const {width} = useResponsive();
  
  return (
    <Container>
      <Title>Usuário</Title>
      <BackScreen/>
    </Container>
  );
}
