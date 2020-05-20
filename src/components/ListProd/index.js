import React from 'react'

import {
    View, 
    Text, 
    SafeAreaView, 
    FlatList, 
    Image, 
    TouchableOpacity,
} from 'react-native'
import { Feather } from '@expo/vector-icons'


import styles from './styles'


export default function Listprod() {
    const data = [
        {   
            id: 1,
            title: 'Hambúrger',
            desc: 'Feito com carne de boi 200g\n, queijo e pão de milho',
            valor: 7.00.toPrecision(3)
        },
        {   
            id: 2,
            title: 'Hambúrger',
            desc: 'Feito com carne de boi 200g\n, queijo e pão de milho',
            valor: 7.00.toPrecision(3)
        },
        {   
            id: 3,
            title: 'Hambúrger',
            desc: 'Feito com carne de boi 200g\n, queijo e pão de milho',
            valor: 7.00.toPrecision(3)
        },
        {   
            id: 4,
            title: 'Hambúrger',
            desc: 'Feito com carne de boi 200g\n, queijo e pão de milho',
            valor: 7.00.toPrecision(3)
        },
    ]
    function _renderItem({item}){
        return(
            <View style={styles.boxContainer}>
                <Image style={styles.image}/>
                <View style={styles.box}>
                    <Text style={styles.titleBox}>title</Text>
                    <Text style={styles.desc}>desc</Text>
                    <View style={styles.box2}>
                        <Text style={styles.valor}>R$ 7,00</Text>
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
            <SafeAreaView style={{paddingBottom: 20}}>
                {data.map(item => (
                    _renderItem(item)
                ))}
            </SafeAreaView>
        </View>
    )
}