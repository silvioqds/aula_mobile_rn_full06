import react, { useState } from "react";
import { Button, TextInput, Text, View, Alert } from "react-native";
import styles from "./styles";
import MyInput from "../../components/myInput";
import MyButton from "../../components/FullButton";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>();
    navigation.setOptions({
        headerLeft : () => {}
    })

    //Usar state apenas quando tem necessidade de atualizar a tela
    const [username, setUsername] = useState('')  
    const [password, setPassword] = useState('') 

    function singIn(){
        if(!username || username.trim() == '' ){
            Alert.alert('Login é obrigatório')
            return;
        }
        
        if(username === 'silvioqds' && password === '123456') {
            navigation.navigate('home')
        }else{
            Alert.alert('Login ou senha inválido(a)');
        }

    }

    return (
        <View style={styles.container}>
            <MyInput label='Login' onChangeText={setUsername} ></MyInput>           
            <MyInput label='Senha' onChangeText={setPassword} secureTextEntry></MyInput>
            <MyButton title="Entrar" onPress={singIn} />
        </View>
    )

}