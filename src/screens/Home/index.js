import React from 'react'

import {ScrollView, View} from 'react-native'
import CarouselProd from '../../components/Carousel'
import Listprod from '../../components/ListProd'


export default function Home(){

    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: '#E0E094', flex: 1, paddingBottom: 50}}
        >
            <CarouselProd />
            <Listprod />
        </ScrollView>
    )
}