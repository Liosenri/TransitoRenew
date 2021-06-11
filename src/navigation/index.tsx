import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  CreateInfraction,
  InfractionDetails,
  Infractions,
  Login,
  PrintInfraction,
} from '@/navigation/screens';
import {StoreStateType} from '@/store';
import {useDispatch, useSelector} from 'react-redux';
import {PRIMARY_COLOR} from '../constants';
import {PostLoginStackParamList} from './types';
// @ts-ignore
import EscPos from '@leesiongchan/react-native-esc-pos';
import {btDeviceDisconnectedAction} from '@/store/BTDevices/BTDevicesActions';

const AuthStack = createStackNavigator();
const AuthStackNavigator = () => (
  <AuthStack.Navigator screenOptions={{headerShown: false}}>
    <AuthStack.Screen name="Login" component={Login} />
  </AuthStack.Navigator>
);

const PostLoginStack = createStackNavigator<PostLoginStackParamList>();

const PostLoginStackNavigator = () => (
  <PostLoginStack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: PRIMARY_COLOR},
      headerTintColor: 'white',
    }}>
    <PostLoginStack.Screen
      name="Infractions"
      options={{title: 'Infracciones'}}
      component={Infractions}
    />
    <PostLoginStack.Screen
      name="PrintInfraction"
      options={{title: 'Imprimir'}}
      component={PrintInfraction}
    />
    <PostLoginStack.Screen
      name="InfractionDetails"
      options={{title: 'Detalles de infracción'}}
      component={InfractionDetails}
    />
    <PostLoginStack.Screen
      name="CreateInfraction"
      options={{title: 'Detalles de infraccion', headerShown: false}}
      component={CreateInfraction}
    />
  </PostLoginStack.Navigator>
);

const Navigation = () => {
  const {credentials} = useSelector(
    (state: StoreStateType) => state.AuthReducer,
  );

  const dispatch = useDispatch();

  EscPos.addListener('bluetoothStateChanged', (event: any) => {
    if (event.state === EscPos.BLUETOOTH_DISCONNECTED) {
      dispatch(btDeviceDisconnectedAction());
    }
  });

  return (
    <NavigationContainer>
      {credentials ? <PostLoginStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
