import { Text,StyleSheet, View, Button} from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";

export default function Home(){

    const navigation = useNavigation<NavigationProp<any>>()

    navigation.setOptions({
      headerLeft: () =>  <View style={styles.buttonLogOff}><Button color='red' title="Sair" onPress={logOff} ></Button></View>,
      headerRight: () => <Button title="Novo" onPress={goToUser}></Button>
    })

    function goToUser(){
      navigation.navigate('user')
    }

    function logOff(){
      navigation.goBack()
    }

    return (    
      <View style={styles.container}>
        <Text>Listagem de Usuários</Text>            
      </View>
    )
}

const styles =  StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonLogOff: {
      marginRight: 10     
    }     
})