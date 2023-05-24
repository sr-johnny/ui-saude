import { StyleSheet } from 'react-native';
import { theme } from '../../global/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.glass,
    borderRadius: 10,
    marginBottom: 20,
    width: 322,
    height: 173,
    justifyContent: 'center',
    alignItems: 'center'    
  }
});
