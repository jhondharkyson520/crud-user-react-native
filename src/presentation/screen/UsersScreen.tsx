import { CustomButton } from "../components/CustomButton";
import { useResponsive } from "@/src/hooks/useResponsive";
import styled from "styled-components/native";
import { BackScreen } from "../components/ButtonBack";
import { Alert, FlatList, Text } from "react-native";
import { useEffect, useState } from "react";
import api from "@/src/infrastructure/services/api";
import { DeleteButton } from "../components/DeleteButton";
import { UpdateButton } from "../components/EditButton";
import { CustomInput } from "../components/CustomInput";

const Container = styled.View`
  flex: 1;
  width: 100%;
  padding: 15px;
  justify-content: center;
  background-color: #f5f5f5;
`;

const Title = styled.Text`
  font-size: ${(props: any) => (props.screenWidth > 400 ? '24px' : '18px')};
  color: #c73535;
  margin-top: 25px;
  text-align: center;
`;

const UserList = styled(FlatList as new () => FlatList<UsersProps>)`
  margin-top: 20px;
`;

const UserCard = styled.View`
  background-color: #FFFFFF;
  width: 100%;
  padding: 8px;
  border-radius: 10px;
  margin-bottom: 10px;
  elevation: 2;
`;

const ButtonRow = styled.View`
  flex-direction: row;
  margin-top: 10px;
  align-items: center;
  justify-content: space-between;
`;

const TextInput = styled.Text`
  font-weight: bold;
  font-size: 18px;
  color: #e95959;
`;

interface UsersProps {
  id: string;
  name: string;
  email: string;
}


export function UsersScreen() {
  const {width} = useResponsive();
  const [users, setUsers] = useState<UsersProps[]>([]);
  const [editedUsers, setEditedUsers] = useState<Record<string, { name: string; email: string }>>({});


  async function fetchUsers() {
    const response = await api.get('/users/get');
    setUsers(response.data);
  }

  async function HandleDeleteUser(id: string) {
    //console.log('id do user: ', id);
    try {
      await api.delete(`/users/delete/${id}`);
      //console.log('user deletado');
      Alert.alert('User deleted');
      fetchUsers();
    } catch(error) {
      console.error('Erro ao deletar usuário: ', error);
      Alert.alert('Error delete user');
    }
    
  }

  async function HandleUpdateUser(id: string) {
    try {
      const updatedData = editedUsers[id];

      if(!updatedData) {
        console.warn('Nenhuma alteração feita');
        return;
      }
      await api.put(`/users/update/${id}`, updatedData);
      //console.log('atualizou');
      Alert.alert('User updated');
      fetchUsers();
    } catch(error) {
      console.error('Erro ao atualizar usuario: ', error);
      Alert.alert('Error updated user');
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  function handleChange(id: string, field: 'name' | 'email', value: string) {
    setEditedUsers(prev => ({
      ...prev,
      [id]: {
        ...prev[id],
        [field]: value,
      },
    }));
  }

  return (
    <Container>
      <Title screenWidth={width}>All users</Title>
      <UserList data={users} keyExtractor={(item: UsersProps) => item.id} renderItem={({item}: {item: UsersProps}) => (
        <UserCard>
          <TextInput>Name</TextInput>          
          <CustomInput  title={""} value={editedUsers[item.id]?.name ?? item.name} onChange={(text) => handleChange(item.id, 'name', text)}/>
          <TextInput>Email</TextInput>   
          <CustomInput title={""} value={editedUsers[item.id]?.email ?? item.email} onChange={(text) => handleChange(item.id, 'email', text)}/>

          <ButtonRow>
            <DeleteButton onPress={() => HandleDeleteUser(item.id)}/>
            <UpdateButton onPress={() => HandleUpdateUser(item.id)}/>
          </ButtonRow>        
        </UserCard>
      )}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 2}}
      />
      <BackScreen/>
    </Container>
  );
}
