import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import {
  CreateInfraction,
  InfractionDetails,
  Infractions,
  Login,
} from '@/navigation/screens';
import {StoreStateType} from '@/store';
import {useSelector} from 'react-redux';
import {Dimensions} from 'react-native';
import {PRIMARY_COLOR} from '../constants';
import {PostLoginStackParamList} from './types';

const ComposeTicketStack = createStackNavigator();
const ComposeTicketStackNavigator = () => (
  <ComposeTicketStack.Navigator screenOptions={{headerShown: false}}>
    <ComposeTicketStack.Screen
      name="CreateInfractionScreen"
      component={CreateInfraction}
    />
  </ComposeTicketStack.Navigator>
);

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
      name="InfractionDetails"
      options={{
        title: 'Detalles de infraccion',
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        gestureEnabled: true,
        gestureResponseDistance: {horizontal: Dimensions.get('window').width},
      }}
      component={InfractionDetails}
    />
  </PostLoginStack.Navigator>
);

const Navigation = () => {
  const {credentials} = useSelector(
    (state: StoreStateType) => state.AuthReducer,
  );

  return (
    <NavigationContainer>
      {credentials ? <PostLoginStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
