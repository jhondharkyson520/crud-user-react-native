import { Feather } from '@expo/vector-icons';
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  background-color: #3ce77e;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;


interface UpdateButtonProps extends TouchableOpacityProps {}

export function UpdateButton({...rest}: UpdateButtonProps) {
    return (
        <Button {...rest}>
            <Feather name='edit-2' size={20} color='#fff' />
        </Button>
    )
}