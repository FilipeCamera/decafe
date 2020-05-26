import React, {useState, useContext} from 'react'

import {expo} from '../../../app.json'

import {View, Text, Image} from 'react-native'
import {Switch} from 'react-native-paper'
import styles from './styles'
import AuthContext from '../../contexts/authContext'
import { HeaderTwo } from '../../components/Header'

export default function Users({navigation}){
    const {user} = useContext(AuthContext)

    return(
        <View style={{flex: 1, backgroundColor: '#F8F8D9'}}>
            <HeaderTwo navigation={navigation}/>
            <View style={styles.container}>
                <Text style={styles.title}>Usuário</Text>
                <View style={styles.box}>
                    <Image style={styles.boxImage} source={{uri: user.photoUrl}}/>
                    <View style={styles.boxText}>
                        <Text style={styles.text}>Nome: {user.name}</Text>
                    </View>
                </View>
                <Text style={styles.title}>Configuração</Text>
                <View style={styles.box2}>
                </View>
                <Text style={styles.footer}>v {expo.version}</Text>
            </View>
        </View>
    )
}