import {createStackNavigator} from '@react-navigation/stack';
import {authStack} from './navConstant';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {authStack.map((item, index) => (
        <Stack.Screen key={index} name={item.path} component={item.component} />
      ))}
    </Stack.Navigator>
  );
}

export default AuthStack;
