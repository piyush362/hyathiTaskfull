import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable, Keyboard, Platform, ScrollView } from 'react-native';
import { auth, createUserWithEmailAndPassword } from '../firebase.js';

//context
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';
import AsyncStorage from '@react-native-async-storage/async-storage';


const SignUpPage = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const { isLogin, login, logout, } = useContext(AuthContext);


    const handleSignUp = () => {
        // Email validation regex pattern
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (!fullName) {
            alert('Please Enter Full Name')
            return
        }
        if (!email) {
            alert('Please Enter Email')
            return
        }
        if (!emailRegex.test(email)) {
            alert('Please Enter a Valid Email Address');
            return;
        }
        if (!phone) {
            alert('Please Enter Phone Number')
            return
        }
        if (!password) {
            alert('Please Enter Password')
            return
        }
        if (password.length < 6) {
            alert('Password must be 6 characters long')
            return
        }
        if (password !== confirmPass) {
            alert('Password and Confirm Password must be same')
            return
        }
        setIsLoading(true)

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                alert('OTP sent Successfully')
                navigation.navigate('OtpPage')
                AsyncStorage.setItem("username", JSON.stringify(email));
                // login()
                // ...
                setIsLoading(false)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert("User already exists")
                setIsLoading(false)

                // ..
            });
    };


    return (
        <ScrollView>
            <View style={[styles.container]}>
                <View>
                    <Text style={styles.heading}>Welcome to Maholo</Text>
                    <Image
                        source={require('../assets/images/mahalologo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                    <View style={{ marginTop: 20 }}>
                        <TextInput
                            placeholder="Full Name"
                            style={styles.inputField}
                            value={fullName}
                            onChangeText={(text) => setFullName(text)}
                        />
                        <TextInput
                            placeholder="Email"
                            style={styles.inputField}
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                        />
                        <TextInput
                            placeholder="Phone Number"
                            style={styles.inputField}
                            keyboardType="numeric"
                            value={phone}
                            onChangeText={(text) => setPhone(text)}
                        />
                        <TextInput
                            placeholder="Password"
                            style={styles.inputField}
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={true}
                        />
                        <TextInput
                            placeholder="Confrom Password"
                            style={styles.inputField}
                            value={confirmPass}
                            onChangeText={(text) => setConfirmPass(text)}
                            secureTextEntry={true}
                        />
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 40 }}>
                        <Pressable
                            style={styles.loginbtn}
                            // onPress={() => navigation.navigate('OtpOne')}
                            onPress={handleSignUp}

                        >
                            <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                                {isLoading ? 'Loading......' : 'Sign Up'}
                            </Text>
                        </Pressable>
                    </View>

                    <View>
                        <Image
                            source={require('../assets/images/socials.png')}
                            style={styles.providerLogo}
                            resizeMode="contain"
                        />
                    </View>

                    <View style={styles.signuptext}>
                        <Pressable onPress={() => navigation.navigate('LoginPage')}>
                            <Text>
                                Already on Maholo?
                                <Text style={{ color: '#6E998E', fontWeight: 'bold', marginLeft: 5 }}>
                                    {"  Login"}
                                </Text>
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignUpPage;

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
        marginTop: 40,
    },
    signuptext: {
        alignSelf: 'center',
        marginTop: 40,
    },
});
