import * as React from 'react';
import { Button, View, StyleSheet, TouchableOpacity, Text, Image, Pressable } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

//context
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';


// screens
import HomePage from '../screens/HomePage';
import ComingSoon from '../screens/ComingSoon';


const Drawer = createDrawerNavigator();

// drawer list item
const DrawerItem = [
    // home, Profile, NFC, Bank , TransferMoney, Transaction , Refer a Friend, Settings, Logout
    {
        id: 1,
        name: 'Home',
        screen: 'Home',
        logo: require('../assets/drawerlogo/home.png'),
    },
    {
        id: 2,
        name: 'Profile',
        screen: 'ComingSoon',
        logo: require('../assets/drawerlogo/profile.png'),
    },
    {
        id: 3,
        name: 'NFC',
        screen: 'ComingSoon',
        logo: require('../assets/drawerlogo/nfc.png'),
    },
    {
        id: 4,
        name: 'Bank',
        screen: 'ComingSoon',
        logo: require('../assets/drawerlogo/bank.png'),
    },
    {
        id: 5,
        name: 'Transfer Money',
        screen: 'ComingSoon',
        logo: require('../assets/drawerlogo/transfer.png'),
    },
    {
        id: 6,
        name: 'Transaction',
        screen: 'ComingSoon',
        logo: require('../assets/drawerlogo/transaction.png'),
    },
    {
        id: 7,
        name: 'Refer a Friend',
        screen: 'ComingSoon',
        logo: require('../assets/drawerlogo/refer.png'),
    },
    {
        id: 8,
        name: 'Settings',
        screen: 'ComingSoon',
        logo: require('../assets/drawerlogo/setting.png'),
    },

]

// custom drawer content
const CustomDrawerContent = ({ navigation }) => {

    const { isLogin, login, logout, } = useContext(AuthContext);


    const handleNavigateToHome = () => {
        navigation.navigate('Home');
    };

    const handleNavigateToNotifications = () => {
        navigation.navigate('Notifications');
    };

    const handleLogout = async () => {
        alert('Logged Out Successfully')
        logout();
    }

    return (
        <View style={styles.drawerContainer}>
            <Pressable
                onPress={() => navigation.closeDrawer()}
                style={styles.drawerBar}>
                <Image
                    source={require('../assets/images/iconarrowright.png')}
                    style={{ height: 50, width: 50, paddingLeft: 30, }}
                    resizeMode='contain' />
            </Pressable>
            <View style={{ paddingHorizontal: 30 }}>
                {DrawerItem.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        style={styles.drawerItem}
                        onPress={() => navigation.navigate(item.screen)}
                        title={item.name}
                    >
                        <Image
                            source={item.logo}
                            style={{ height: 30, width: 30, marginRight: 20 }}
                            resizeMode='contain' />
                        <Text style={styles.drawerItemText}>{item.name}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <TouchableOpacity
                style={[styles.drawerItem, { paddingHorizontal: 30, }]}
                onPress={() => handleLogout()}
            >
                <Image
                    source={require('../assets/drawerlogo/logout.png')}
                    style={{ height: 30, width: 30, marginRight: 20 }}
                    resizeMode='contain' />
                <Text style={styles.drawerItemText}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export function AppDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen
                name="Home"
                component={HomePage}
                options={{ headerShown: false }}
            />
            <Drawer.Screen
                name="ComingSoon"
                component={ComingSoon}
            />
        </Drawer.Navigator>
    );
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        paddingTop: 32,
    },
    drawerItem: {
        marginBottom: 20,
        paddingVertical: 10,
        flexDirection: 'row',
    },
    drawerItemText: {
        fontSize: 18,
    },
    drawerBar: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginBottom: 20,
        paddingLeft: 20,
        backgroundColor: '#3B5B50',
        height: 60,
    }
});