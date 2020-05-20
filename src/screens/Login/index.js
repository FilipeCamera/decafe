import React, {useState} from 'react'

import androidClientId from '../../config/client_id';

import {View, ImageBackground, TouchableOpacity, Text} from 'react-native'
import {Feather, FontAwesome} from '@expo/vector-icons'

import * as Animatable from 'react-native-animatable';
import * as Google from 'expo-google-app-auth';

import styles from './styles'


export default function Login({navigation}) {
    const [perfil, setPerfil] = useState({signedIn: true, name: '', photoUrl: ''})
    
    async function signInWithGoogleAsync() {
        try {
          const result = await Google.logInAsync({
            androidClientId: androidClientId,
            scopes: ['profile', 'email'],
          });
      
          if (result.type === 'success') {
            setPerfil({
                signedIn: true,
                name: result.user.name,
                photoUrl: result.user.photoUrl
            })
            navigation.navigate('Home', {name: perfil.name, photoUrl: perfil.photoUrl})
          } else {
            return console.log('Cancelled');
          }
        } catch (e) {
          return console.log('Error', e);
        }
    }
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