import React from 'react';
import {View, Text} from 'react-native';
import Login from '@/containers/Login';

interface Props {}

const index = ({}: Props) => {
  return (
    <View>
      <Text>Tickets</Text>
      <Login></Login>
    </View>
  );
};

export default index;
