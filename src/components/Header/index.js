import React from 'react'

import {View, Text, TouchableOpacity} from 'react-native'

import {Feather} from '@expo/vector-icons'

export function HeaderTwo({navigation}){
    return(
        <View style={{
            marginTop: 40,
            marginBottom: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20
        }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Feather name='arrow-left' size={25} color='#845A49'/>
            </TouchableOpacity>
            <Text style={{color: '#845A49', fontSize: 30, fontFamily: 'brush-script-mt-italic'}}>DêCafé Bistrô</Text>
        </View>
    )
}

export default function Header({navigation}){
    return(
        <View style={{
            marginTop: 40,
            marginBottom: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingLeft: 20,
            paddingRight: 20
        }}>
            <Text style={{color: '#845A49', fontSize: 30, fontFamily: 'brush-script-mt-italic'}}>DêCafé Bistrô</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Pedidos')}>
                <Feather name='shopping-bag' size={25} color='#845A49'/>
            </TouchableOpacity>
        </View>
    )
}