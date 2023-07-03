import { StyleSheet } from 'react-native';
import { theme } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.glass,
    width: 322,
    justifyContent: 'center',
    marginVertical: 50,
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  text: {
    textAlign: 'auto',
    color: theme.colors.text,
    fontFamily: theme.fonts.regular,
    fontSize: 18,
  },
  text_bold: {
    textAlign: 'auto',
    color: theme.colors.text,
    fontFamily: theme.fonts.bold,
    fontSize: 18,
  },
});