import React, { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create the AuthContext
export const AuthContext = createContext(null);

// AuthContext Provider component
export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    // Check if user is logged in using AsyncStorage
    useEffect(() => {
        checkLoginStatus();
    }, []);

    const checkLoginStatus = async () => {
        try {
            const isLoggedIn = await AsyncStorage.getItem('isLogin');
            setIsLogin(JSON.parse(isLoggedIn));
        } catch (error) {
            console.log('Error fetching login status:', error);
            setIsLogin(false);
        }
    };

    // Function to log in the user
    const login = async () => {
        await AsyncStorage.setItem('isLogin', JSON.stringify(true));
        setIsLogin(true);
    };

    // Function to log out the user
    const logout = async () => {
        try {
            await AsyncStorage.setItem('isLogin', JSON.stringify(false));
            setIsLogin(false);
        } catch (error) {
            console.log('Error removing login status:', error);
        }
    };

    // Context value to be provided
    const authContextValue = {
        isLogin,
        login,
        logout,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
};
