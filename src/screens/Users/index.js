import React, {useState} from 'react'

import {expo} from '../../../app.json'

import {View, Text, Image} from 'react-native'
import {Switch} from 'react-native-paper'
import styles from './styles'

export default function Users(){
    const [location, setLocation] = useState(false)

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Usuário</Text>
            <View style={styles.box}>
                <Image style={styles.boxImage}/>
                <View style={styles.boxText}>
                    <Text style={styles.text}>Nome: </Text>
                    <Text style={styles.text}>Retirada</Text>
                    <View style={styles.boxIntText}>
                        <Text style={styles.text}>-Local: </Text>
                        <Text style={styles.text}>-Entrega: </Text>
                    </View>
                </View>
            </View>
            <Text style={styles.title}>Configuração</Text>
            <View style={styles.box2}>
                <Text style={styles.text2}>Permitir usar localização</Text>
                <Switch value={location} onValueChange={() => {
                    setLocation(true)
                    if(location === true){
                        setLocation(false)
                    }
                }}/>
            </View>
            <Text style={styles.footer}>v {expo.version}</Text>
        </View>
    )
}