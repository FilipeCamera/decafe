import React, {useState, useContext} from 'react'

import AuthContext from '../../contexts/authContext'

import {View, ImageBackground, TouchableOpacity, Text} from 'react-native'
import {Feather, FontAwesome} from '@expo/vector-icons'

import * as Animatable from 'react-native-animatable';

import styles from './styles'

export default function Login() {
    const { signInWithGoogleAsync } = useContext(AuthContext)
    return(
        <View style={styles.container}>
            <View style={styles.boxImage}>
                <ImageBackground source={require('../../images/decafe.jpg')} style={styles.imgBackground}/>
            </View>
            <Animatable.View
                animation='bounceInUp'
                duration={2000} 
                style={styles.boxButton}
            >
                <Animatable.View 
                    animation='fadeIn'
                    duration={2100} 
                    style={styles.boxIcon}
                >
                    <Feather name='coffee' size={32} color='#754C3B'/>
                </Animatable.View>
                <Animatable.View animation='slideInLeft' duration={2400}>
                    <TouchableOpacity style={styles.button} onPress={signInWithGoogleAsync}>
                        <FontAwesome name='google' size={24} color='#797979'/>
                        <Text style={{color: '#797979', fontSize: 16}}>Sign in with Google</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </Animatable.View>
        </View>
    )
}