import React from 'react';
import {View, Text, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

interface Props {}

const PickerDemo = (props: Props) => {
  return (
    <SafeAreaView style={{backgroundColor: 'red'}}>
      <Text>Hola</Text>
      <View style={{height: 12, width: 12, borderRadius: 3, borderWidth: 1,overflow:"hidden",borderColor:"#DDDDDD"}}>
        <Image
          // style={{flex:1}}
          resizeMode="repeat"
          source={require('../stripe_bkgd.png')}></Image>
      </View>
    </SafeAreaView>
  );
};

export default PickerDemo;
