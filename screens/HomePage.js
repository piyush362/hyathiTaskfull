import { StyleSheet, Text, View, Image, ScrollView, Pressable } from 'react-native'
import React, { useEffect, useState } from 'react'

//context
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';
import AsyncStorage from '@react-native-async-storage/async-storage';


const TrasactionList = ({ val }) => {
    const colortext = val.type === 'Received' ? '#6E998E' : '#FF0000'
    return (
        <View style={styles.TrasactionListbox}>
            <View>
                <Text>{val.type}</Text>
                <Text>{val.date}</Text>
            </View>
            <View>
                <Text style={{ color: `${colortext}` }}>{val.amount}</Text>
            </View>
        </View>
    )
}

const transactions = [
    {
        id: 1,
        type: 'Received',
        date: 'Today, 02:30 PM',
        amount: '+ $ 10.00'
    },
    {
        id: 2,
        type: 'Received',
        date: 'Today, 10:30 PM',
        amount: '+ $ 90.00'
    },
    {
        id: 3,
        type: 'Transfered',
        date: 'Yestarday, 09:30 AM',
        amount: '- $ 20.00'
    },
    {
        id: 4,
        type: 'Received',
        date: 'Today, 02:30 PM',
        amount: '+ $ 10.00'
    },
    {
        id: 5,
        type: 'Transfered',
        date: 'Today, 02:30 PM',
        amount: '- $ 50.00'
    },
    {
        id: 6,
        type: 'Received',
        date: '05 Mar 23, 02:30 PM',
        amount: '+ $ 5000.00'
    },
    {
        id: 7,
        type: 'Received',
        date: '05 Mar 23, 02:30 PM',
        amount: '+ $ 5000.00'
    },
    {
        id: 8,
        type: 'Received',
        date: '05 Mar 23, 02:30 PM',
        amount: '+ $ 5000.00'
    },
]


const HomePage = ({ navigation }) => {

    const getUserName = async () => {
        try {
            const value = await AsyncStorage.getItem('username')
            if (value !== null) {
                setUserName(JSON.parse(value))
            } else {
                setUserName('User')
            }
        } catch (e) {
            console.log(e)
        }
    }


    const { isLogin, login, logout, } = useContext(AuthContext);
    const [userName, setUserName] = useState('User')

    useEffect(() => {
        getUserName()
    }, [])


    const handleLogout = async () => {
        alert('Logged Out Successfully')
        logout();
    }

    return (
        <>
            <View style={styles.container}>
                {/* Navbar */}
                <View style={styles.navbar}>
                    {/* hamburger menu */}
                    <Pressable
                        style={{ width: 100 }}
                        onPress={() => navigation.openDrawer()}
                    >
                        <Image source={require('../assets/images/hamburger.png')} style={styles.hamburger} resizeMode='contain' />
                    </Pressable>
                    {/* //logout btn */}
                    {/* <Pressable
                        onPress={handleLogout}
                    >
                        <Text style={{ color: '#fff' }}>LogOut</Text>
                    </Pressable> */}
                    {/* bell icon */}
                    <Image source={require('../assets/images/icon-bell.png')} style={styles.hamburger} resizeMode='contain' />
                </View>

                {/* remaing item */}
                <View style={{ padding: 20 }}>
                    <Text style={styles.heading}>Hii, <Text style={{ color: '#3B5B50' }}>{`${userName} 😊`}</Text></Text>
                    {/* wallet card */}
                    <View style={styles.walletcardContainer}>
                        <Text style={styles.heading}>Your Wallet</Text>
                        <Image source={require('../assets/images/walletCard.jpg')}
                            style={styles.walletcard} resizeMode='contain' />
                    </View>

                    {/* transactions list */}
                    <View style={styles.trasectionContainer}>
                        {/* bar */}
                        <View style={styles.trasectionbar}>
                            <Text style={styles.listtitle}>Recent Transactions</Text>
                            <Text style={styles.seeallbtn}>See All</Text>
                        </View>
                    </View>

                    {/* list */}
                </View>
                <ScrollView style={{ marginTop: 5, paddingHorizontal: 20 }}>
                    {transactions.map((val) => {
                        return <TrasactionList val={val} key={val.id} />
                    })}
                    <View style={{ height: 100, alignItems: 'center', justifyContent: 'center' }}>
                        <Text>Happy Transactions 😇</Text>
                    </View>
                </ScrollView>
            </View>
        </>
    )
}

export default HomePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 32,
        backgroundColor: '#fff',
    },
    navbar: {
        backgroundColor: '#6E998E',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    hamburger: {
        width: 30,
        height: 30,
    },
    heading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8
    },
    walletcard: {
        width: 169,
        height: 122,
    },
    walletcardContainer: {
        marginTop: 30,
        gap: 15,
    },
    trasectionContainer: {
        paddingTop: 40,
        padding: 8
    },
    trasectionbar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    seeallbtn: {
        backgroundColor: '#6E998E',
        color: '#fff',
        width: 91,
        height: 32,
        borderRadius: 16,
        paddingVertical: 5,
        paddingHorizontal: 10,
        textAlign: 'center',
        fontSize: 14,
    },
    listtitle: {
        fontSize: 14,
        // fontWeight: 'bold',
    },
    TrasactionListbox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
        backgroundColor: '#D0D0D0',
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
    }



})