import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

import { theme } from '../../global/themes';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 34,
      paddingTop: getStatusBarHeight() + 35,
      backgroundColor: theme.colors.dark,
    },
    title: {
      color: theme.colors.text,
      fontSize: 32,
      fontFamily: theme.fonts.regular,
    },
    title_name: {
      color: theme.colors.text,
      fontSize: 32,
      fontFamily: theme.fonts.bold,
    },
    subtitle: {
      color: theme.colors.text,
      fontSize: 20,
      fontFamily: theme.fonts.thin,
    },
    label: {
      color: theme.colors.text,
      fontSize: 16,
      marginBottom: 12,
      fontFamily: theme.fonts.thin,
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 70,
      marginBottom: 30,
    },
    month: {
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
  });