import React from 'react'

import {View, ImageBackground, TouchableOpacity, Text} from 'react-native'
import {Feather, FontAwesome} from '@expo/vector-icons'


import styles from './styles'

export default function Login({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.boxImage}>
                <ImageBackground source={require('../../images/decafe.jpg')} style={styles.imgBackground}/>
            </View>
            <View style={styles.boxButton}>
                <View style={styles.boxIcon}>
                <Feather name='coffee' size={32} color='#754C3B'/>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <FontAwesome name='google' size={24} color='#797979'/>
                    <Text style={{color: '#797979', fontSize: 16}}>Sign in with Google</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}