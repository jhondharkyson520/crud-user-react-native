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
      <Title screenWidth={width}>Home</Title>
      <CustomButton title="Create User" onPress={() => router.push("/create")} />
      <CustomButton title="All Users" onPress={() => router.push('/users')} />
    </Container>
  );
}
