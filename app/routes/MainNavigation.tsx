import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Create, Feeds, PostDetails} from 'screens/main/MainIndex';
const MainStack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="feeds" component={Feeds} />
      <MainStack.Screen name="create" component={Create} />
      <MainStack.Screen name="details" component={PostDetails} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
