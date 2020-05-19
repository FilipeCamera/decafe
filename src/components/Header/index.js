import React from 'react'

import {View, Text, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons'

import styles from './styles'


export default function Header({navigation}){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.openDrawer()}>
                <Feather name="menu" size={24} color='#845A49' />
            </TouchableOpacity>
            <Text style={styles.title}>DêCafé Bistrô</Text>   
            <TouchableOpacity style={styles.button}>
                <Feather name="shopping-bag" size={24} color='#845A49'/>
            </TouchableOpacity>         
        </View>
    )
}