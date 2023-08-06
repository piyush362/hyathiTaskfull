import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react'
import { auth, signInWithEmailAndPassword } from '../firebase.js';

//context
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';


const LoginPage = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { isLogin, login, logout, } = useContext(AuthContext);


    const handleLogin = async () => {
        // Email validation regex pattern
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!email || !password) {
            alert('Please fill email and password')
            return
        }
        if (!emailRegex.test(email)) {
            alert('Please Enter a Valid Email Address');
            return;
        }

        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('User Logged In Successfully')
                login();
                AsyncStorage.setItem("username", JSON.stringify(email));
                setIsLoading(false)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("Wrong Email or Password")
                setIsLoading(false)
            });
    }


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Welcome to Maholo</Text>
            <Image
                source={require('../assets/images/mahalologo.png')}
                style={styles.logo} resizeMode='contain'
            />
            <View style={{ marginTop: 20 }}>
                <TextInput
                    placeholder='Email'
                    style={styles.inputField}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.inputField}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry={true}
                />
            </View>
            <View style={{ alignItems: 'flex-end', marginTop: 10 }}>
                <Text style={{ color: '#6E998E', fontWeight: 'bold', paddingVertical: 5 }}>Forgot Password?</Text>
            </View>

            <Pressable style={{ alignItems: 'center', marginTop: 40 }}
                // onPress={() => navigation.navigate('Desclaimer')}
                onPress={handleLogin}
            >
                <View style={styles.loginbtn}>
                    <Text
                        style={{ color: '#fff', fontWeight: 'bold' }}
                    >
                        {isLoading ? "Loading......" : "Login"}
                    </Text>
                </View>
            </Pressable>

            <View>
                <Image source={require('../assets/images/socials.png')} style={styles.providerLogo} resizeMode='contain' />
            </View>
            <View style={styles.signuptext}>
                <Pressable
                    onPress={() => navigation.navigate('SignUpPage')}
                >
                    <Text>New to Maholo?
                        <Text
                            style={{ color: '#6E998E', fontWeight: 'bold', marginLeft: 5 }}
                        >
                            {"  Sign Up"}
                        </Text>
                    </Text>
                </Pressable>
            </View>

        </View>
    )
}

export default LoginPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 60,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 20,
    },
    logo: {
        width: 65,
        height: 87,
        alignSelf: 'center',
        overflow: 'hidden',
        marginTop: 20,
    },
    inputField: {
        padding: 15,
        borderRadius: 10,
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#a9a9a9',
    },
    loginbtn: {
        backgroundColor: '#6E998E',
        width: 216,
        height: 41,
        borderRadius: 3,
        paddingVertical: 10,
        alignItems: 'center',
    },
    providerLogo: {
        alignSelf: 'center',
        marginTop: 40
    },
    signuptext: {
        alignSelf: 'center',
        marginTop: 40,
    }
});