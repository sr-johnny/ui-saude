import { StyleSheet } from 'react-native';
import { theme } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.glass,
    width: 322,
    marginTop: 50,
    borderRadius: 10,
  },
  title: {
    bottom: 90,
    color: theme.colors.text,
    fontFamily: theme.fonts.bold,
    fontSize: 28,
    paddingHorizontal: 20,
  },
  image_background: {
    width: '100%',
    height: 223,
    opacity: 0.4,
  },
  gradient: {
    borderRadius: 10,
    height: 220,
  }
});