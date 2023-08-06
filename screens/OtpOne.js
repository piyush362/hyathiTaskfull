import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native'
import React, { useState } from 'react'

//context
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext.js';

const OtpOne = ({ navigation }) => {

    const handleOtp = () => {
        alert('OTP Verified')
        navigation.navigate('Desclaimer')
    }

    return (
        <View style={styles.container}>
            {/* logo */}
            <View style={styles.otplogo}>
                <Image source={require('../assets/images/lock_open.png')}
                    resizeMode='contain' />
            </View>

            {/* OTP labels */}
            <View style={styles.otpLabel}>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>OTP Verification</Text>
                <Text style={{ fontSize: 16 }}>Enter your Verification code</Text>
            </View>

            {/* OTP input Container */}
            <View style={styles.otpInputcontainer}>
                <TextInput
                    placeholder='4'
                    style={styles.inputField}
                    keyboardType="numeric"
                />
                <TextInput placeholder='5' style={styles.inputField} keyboardType="numeric" />
                <TextInput placeholder='7' style={styles.inputField} keyboardType="numeric" />
                <TextInput placeholder='9' style={styles.inputField} keyboardType="numeric" />
            </View>

            {/* Resend OTP */}
            <View style={styles.signuptext}>
                <Text style={{ color: 'green', fontWeight: 'bold' }}>Enter any Dummy OTP </Text>
                <Text>Did not received code?  <Text style={{ color: '#6E998E', fontWeight: 'bold' }}>Send again.</Text></Text>
            </View>

            {/* Confirm Button */}
            <Pressable
                onPress={() => handleOtp()}
            >
                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <View style={styles.verifybtn}>
                        <Text style={{ color: '#fff', fontWeight: 'bold' }}>Verify</Text>
                    </View>
                </View>
            </Pressable>


        </View >
    )
}

export default OtpOne

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        paddingTop: 60,
        alignSelf: 'center',
    },
    otplogo: {
        alignSelf: 'center',
        overflow: 'hidden',
        marginTop: 150,
    },
    otpLabel: {
        marginTop: 50,
        alignItems: 'center',
        gap: 20
    },
    inputField: {
        padding: 5,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#a9a9a9',
        width: 50,
        height: 50,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    otpInputcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 50,
    },
    signuptext: {
        marginTop: 170,
        alignItems: 'center',
    },
    verifybtn: {
        backgroundColor: '#6E998E',
        width: 216,
        height: 41,
        borderRadius: 3,
        paddingVertical: 10,
        alignItems: 'center',

    }
})