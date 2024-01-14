import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './login/login';
import Homemain from './home/homemain/homemain';
import Thutuchanhchinh from './home/homemain/thutuchanhchinh/thutuchanhchinh';
import Motcuakhaothi from './home/homemain/thutuchanhchinh/motcuakhaothi/motcuakhaothi';
import Phuckhao from './home/homemain/thutuchanhchinh/motcuakhaothi/phuckhao/phuckhao';
import Lichthi from './home/homemain/thutuchanhchinh/motcuakhaothi/lichthi/lichthi';

// import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();
function Index() {
  return (
    
 <NavigationContainer>
      <Stack.Navigator initialRouteName='login' screenOptions={{headerShown:false}}>
      <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="homemain" component={Homemain} />
        <Stack.Screen name="thutuchanhchinh" component={Thutuchanhchinh} />
        <Stack.Screen name="motcuakhaothi" component={Motcuakhaothi} />
        <Stack.Screen name="phuckhao" component={Phuckhao} />
        <Stack.Screen name="lichthi" component={Lichthi} />
        {/* <Stack.Screen name="Thongtinsinhvien" component={Thongtinsinhvien} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Index;