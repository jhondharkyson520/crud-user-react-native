import { Feather } from '@expo/vector-icons';
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";

const Button = styled.TouchableOpacity`
  background-color: #e74c3c;
  padding: 10px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;


interface DeleteButtonProps extends TouchableOpacityProps {}

export function DeleteButton({...rest}: DeleteButtonProps) {
    return (
        <Button {...rest}>
            <Feather name='trash-2' size={20} color='#fff' />
        </Button>
    )
}