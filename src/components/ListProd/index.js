import React from 'react'

import {View, Text, SafeAreaView, FlatList, Image, TouchableOpacity} from 'react-native'

import styles from './styles'
import { Feather } from '@expo/vector-icons'

export default function Listprod() {
    const data = [
        {   
            img: '../../../assets/icon.png',
            title: 'Hambúrger',
            desc: 'Feito com carne de boi 200g\n, queijo e pão de milho',
            valor: 7.00.toPrecision(3)
        },
    ]
    function _renderItem({item}){
        return(
            <View style={styles.boxContainer}>
                <Image source={item.img} style={styles.image}/>
                <View style={styles.box}>
                    <Text style={styles.titleBox}>{item.title}</Text>
                    <Text style={styles.desc}>{item.desc}</Text>
                    <View style={styles.box2}>
                        <Text style={styles.valor}>R$ {item.valor}</Text>
                        <TouchableOpacity style={styles.button}>
                            <Feather name='shopping-cart' size={14} color='#845A49'/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Produtos</Text>
            <SafeAreaView>
                <FlatList
                    data={data}
                    renderItem={item => _renderItem(item)}
                />
            </SafeAreaView>
        </View>
    )
}