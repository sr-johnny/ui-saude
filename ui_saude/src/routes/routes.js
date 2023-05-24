import * as React from 'react';
import 'react-native-gesture-handler';
import { Home } from '../screens/Home';
import { Dashboard } from '../screens/Dashboard';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export function Routes() {
    return(
        <Stack.Navigator initialRouteName="Dashboard">
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
                options={{ headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false}}
            />
        </Stack.Navigator>
    );
}