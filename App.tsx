import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginPage from './src/pages/Login';
import HomePage from './src/Home'
import UserPage from './src/pages/User';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={LoginPage} options={{title : 'Acesso'}} />
        <Stack.Screen name="home" component={HomePage} options={{title: 'Usuários', headerLeft: () => <></>}} />
        <Stack.Screen name="user" component={UserPage} options={{title: 'Novo Usuário'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}