import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  label: {fontWeight: 'bold', fontSize: 17},
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 8,
  },
});
