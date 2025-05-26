import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from 'screens/auth/AuthIndex';
const AuthStack = createNativeStackNavigator();

const AuthStackNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <AuthStack.Screen name="login" component={Login} />
    </AuthStack.Navigator>
  );
};

export default AuthStackNavigator;
