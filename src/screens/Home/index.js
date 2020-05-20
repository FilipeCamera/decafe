import React from 'react'

import {ScrollView} from 'react-native'
import CarouselProd from '../../components/Carousel'
import Listprod from '../../components/ListProd'

import * as Animatable from 'react-native-animatable'

export default function Home(){

    return(
        <ScrollView
            showsVerticalScrollIndicator={false}
            style={{backgroundColor: '#E0E094', flex: 1, paddingBottom: 50}}
        >
            <Animatable.View animation='zoomIn' duration={2400}>
                <CarouselProd />
            </Animatable.View>
            <Animatable.View animation='slideInUp' duration={2500}>
                <Listprod />
            </Animatable.View>
        </ScrollView>
    )
}