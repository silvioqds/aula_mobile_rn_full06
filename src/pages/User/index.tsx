import { Alert, View } from "react-native";
import MyInput from "../../components/myInput";
import styles from "./styles";
import MyButton from "../../components/FullButton";
import { useState } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function User() {
    const navigation = useNavigation<NavigationProp<any>>()
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')    
    const [passConfirm, setPassConfirm] = useState('')


    function save() {
        if(!name || name.trim() === ''){
            Alert.alert('Nome é origatório')
            return
        }

        if(!username || username.trim() === ''){
            Alert.alert('Username é origatório')
            return
        }

        if(!password || password.trim() === ''){
            Alert.alert('Senha é origatório')
            return
        }

        if(password !== passConfirm){
            Alert.alert('Senhas não conferem')
            return
        }

        Alert.alert('Usuário salvo com sucesso!')
        navigation.goBack()
    }

    return(
        <View style={styles.container}>
            <MyInput value={name} label='Nome' onChangeText={setName}></MyInput>
            <MyInput value={username} label='Username' onChangeText={setUsername}></MyInput>
            <MyInput value={password} label='Senha' onChangeText={setPassword} secureTextEntry></MyInput>
            <MyInput value={passConfirm} label='Confirmar Senha' onChangeText={setPassConfirm} secureTextEntry></MyInput>

            <MyButton title="Salvar" onPress={save}></MyButton>
        </View>
    )
}