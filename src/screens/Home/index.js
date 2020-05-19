import React from 'react'

import {View, Text} from 'react-native'
import Header from '../../components/Header'
import CarouselProd from '../../components/Carousel'
import Listprod from '../../components/ListProd'

export default function Home(){
    return(
        <View style={{backgroundColor: '#E0E094', flex: 1}}>
            <CarouselProd />
            <Listprod />
        </View>
    )
}