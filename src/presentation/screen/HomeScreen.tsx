import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import { CustomButton } from "../components/CustomButton";
import styled from "styled-components/native";
import { useResponsive } from "@/src/hooks/useResponsive";

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

export function HomeScreen() {
  const router = useRouter();
  const {width} = useResponsive();

  return (
    <Container>
      <Title screenWidth={width}>Home - E com styled em</Title>
      <CustomButton title="Ir para User" onPress={() => router.push("/user")} />
      <CustomButton title="Ir para Login" onPress={() => router.push("/login")} />
    </Container>
  );
}
