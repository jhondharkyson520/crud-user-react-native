import React from "react";
import styled from "styled-components/native";

type Props = {
  title: string;
  onPress: () => void;
};

const ButtonContainer = styled.TouchableOpacity`
  padding: 12px;
  background-color: #963a3a;
  border-radius: 20px;
  margin-top: 16px;
`;

const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
`;

export function CustomButton({ title, onPress }: Props) {
  return (
    <ButtonContainer onPress={onPress}>
      <ButtonText>{title}</ButtonText>
    </ButtonContainer>
  );
}
