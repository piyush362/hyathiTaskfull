import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

const dummytext = {
    title: "Lorem ipsum dolor sit amet consectetur. Felis nibh vitae commodo mattis molestie curabitur morbi vestibulum. Ipsum odio sit nisi parturient libero lorem. Nullam justo pellentesque amet sit iaculis ut lectus habitasse. Nunc quis at fames id venenatis aliquam dictum. Mauris bibendum consequat vulputate lorem id non tristique placerat. Risus placerat viverra bibendum aliquet nulla nunc curabitur ullamcorper. Habitasse velit ante egestas libero dolor ut egestas amet. Etiam viverra cursus nulla urna. Dignissim justo dictum ipsum integer lectus. Pellentesque vestibulum accumsan atHabitant a justo mauris urna id pellentesque arcu natoque libero. Amet rhoncus sit semper natoque urna lacus at eleifend dignissim. Ipsum pharetra arcu commodo nunc. Bibendum nunc ultricies ac nisi. Et nullam imperdiet magna pulvinar. Blandit sagittis dignissim orci amet elit ut vitae nulla",
}

//context
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';

const Desclaimer = ({ navigation }) => {
    const { isLogin, login, logout, } = useContext(AuthContext);

    const handleLogin = () => {
        login();
    }

    return (
        <View style={styles.container}>
            <View>
                <Image source={require('../assets/images/desclaierlogo.png')}
                    style={styles.desclaimer} resizeMode='contain' />
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
                    KNOW YOUR CUSTOMMER</Text>
                <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>
                    Legal Desclaimer</Text>
                <Text style={{ marginTop: 20, fontSize: 16, textAlign: 'justify', color: '#606060' }}>
                    {dummytext.title}
                </Text>
            </View>
            <Pressable style={{ alignItems: 'center', marginTop: 40 }}
                onPress={() => handleLogin()}
            >
                <View style={styles.loginbtn}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Confirm</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default Desclaimer

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 60,
        alignSelf: 'center',
    },
    desclaimer: {
        alignSelf: 'center',
        overflow: 'hidden',
        marginTop: 20,
    },
    loginbtn: {
        backgroundColor: '#3B5B50',
        width: 216,
        height: 41,
        borderRadius: 3,
        paddingVertical: 10,
        alignItems: 'center',
    },

})