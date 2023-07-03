import { StyleSheet } from 'react-native';
import { theme } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.glass,
    borderRadius: 10,
    marginTop: 5,
    paddingLeft: 17,
    paddingRight: 17,
    height: 50,
    fontSize: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonlabel: {
    color: theme.colors.text,
    fontFamily: theme.fonts.light,
    fontSize: 18,
  },
  statuslabel: {
    color: theme.colors.text,
    fontSize: 18,
    fontFamily: theme.fonts.medium,
  },
  status: {
    width: 14,
    height: 14,
    borderRadius: 7,
  },
});