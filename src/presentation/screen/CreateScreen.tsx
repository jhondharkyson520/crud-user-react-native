import { CustomButton } from "../components/CustomButton";
import { useResponsive } from "@/src/hooks/useResponsive";
import styled from "styled-components/native";
import { BackScreen } from "../components/ButtonBack";
import { CustomInput } from "../components/CustomInput";
import api from "@/src/infrastructure/services/api";
import { useState } from "react";
import { Alert } from "react-native";

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

const ContainerInput = styled.View`
  width: 60%;
`;


export function CreateScreen() {
  const {width} = useResponsive();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');

  function isValidEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  async function handleCreate() {
    if (name === '' || email === '') {
      Alert.alert('Preencha todos os campos');
      return;
    }

    if (!isValidEmail(email)) {
      Alert.alert('E-mail inválido', 'Digite um e-mail válido.');
      return;
    }

    try{
      await api.post('/users/create', {
        name: name,
        email: email
      });
      setName('');
      setEmail('');
      Alert.alert('User created');
    } catch(error) {
      Alert.alert('Error in create');
      console.log('Error ao criar', error);
    }
  }
  
  return (
    <Container>
      <Title style={{marginBottom: 50}} >Create User</Title>
      <ContainerInput>
        <Title style={{marginLeft: 15, marginBottom: 5}} >Name</Title>
        <CustomInput title={"John Doe"} value={name} onChange={setName} />
        <Title style={{marginLeft: 15, marginBottom: 5}}>Email</Title>
        <CustomInput title={"johndoe@gmail.com"} value={email} onChange={setEmail} />

        <CustomButton title={"Create"} onPress={handleCreate}/>
      </ContainerInput>

      
      <BackScreen/>
    </Container>
  );
}
