import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppStack } from './AppStack.js';
import { AuthStack } from './AuthStack.js'
import { AppDrawer } from './AppDrawer.js'

//context 
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';

const Router = () => {

    // const [isLogin, setIsLogin] = React.useState(false);
    // const { isLogin } = useAuth();
    const { isLogin } = useContext(AuthContext);

    return (
        <NavigationContainer>
            {/* {isLogin ? <AppStack /> : <AuthStack />} */}
            {isLogin ? <AppDrawer /> : <AuthStack />}
            {/* <AppDrawer /> */}
        </NavigationContainer>
    );
};

export default Router;