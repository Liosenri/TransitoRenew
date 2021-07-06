import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {MARGIN_SIZE, MEDIUM_MARGIN_SIZE, PRIMARY_COLOR} from '../constants';

interface Props {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
}

const CustomSearchBar = ({value, onChangeText, placeholder}: Props) => (
  <View style={styles.container}>
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={styles.textInput}
      placeholder={placeholder}
    />
  </View>
);

export default CustomSearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: PRIMARY_COLOR,
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 10,
    flex: 1,
    marginHorizontal: MARGIN_SIZE,
    marginVertical: MEDIUM_MARGIN_SIZE,
    padding: MEDIUM_MARGIN_SIZE,
    fontFamily: 'NeoSansPro-Regular',
  },
});
