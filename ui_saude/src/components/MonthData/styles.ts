import { StyleSheet } from 'react-native';
import { theme } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.glass,
    borderRadius: 10,
    paddingLeft: 17,
    paddingRight: 7,
    marginBottom: 10,
    width: 322,
    height: 51,
    fontSize: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'    
  },
  title: {
    color: theme.colors.text,
    fontSize: 20,
    fontFamily: theme.fonts.light,
  },
  font: {
    color: theme.colors.text,
    fontSize: 20,
    fontFamily: theme.fonts.regular,
  },
  controls: {
    width: 172,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  updown: {
    backgroundColor: theme.colors.glass,
    borderRadius: 10,
    width: 38,
    height: 38,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center'    
  },
  value: {
    backgroundColor: theme.colors.glass,
    borderRadius: 10,
    width: 68,
    height: 38,
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center'    
  },
});