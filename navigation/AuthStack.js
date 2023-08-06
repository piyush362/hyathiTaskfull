import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//screens
// LoginPage, SignUpPage, OtpOne, Desclaimer
import LoginPage from '../screens/LoginPage';
import SignUpPage from '../screens/SignUpPage';
import OtpOne from '../screens/OtpOne';
import Desclaimer from '../screens/Desclaimer';

const Stack = createNativeStackNavigator();

export const AuthStack = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name="LoginPage"
                component={LoginPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="SignUpPage"
                component={SignUpPage}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Desclaimer"
                component={Desclaimer}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="OtpPage"
                component={OtpOne}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};