import React, {useEffect} from 'react'

import {ScrollView, View} from 'react-native'
import CarouselProd from '../../components/Carousel'
import Listprod from '../../components/ListProd'
import Header from '../../components/Header'
import * as Animatable from 'react-native-animatable'

export default function Home({navigation}){
    return(
        <View style={{flex: 1, backgroundColor: '#E0E094'}}>
            <Header navigation={navigation}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{backgroundColor: '#E0E094', flex: 1, paddingBottom: 50}}
            >
                <Animatable.View animation='zoomIn' delay={2000} duration={2000} useNativeDriver={true}>
                    <CarouselProd />
                </Animatable.View>
                <Animatable.View animation='fadeIn' duration={2000} delay={2000} useNativeDriver={true}>
                    <Listprod />
                </Animatable.View>
            </ScrollView>
        </View>
    )
}