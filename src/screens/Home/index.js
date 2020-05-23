import React from 'react'

import {ScrollView, View} from 'react-native'
import CarouselProd from '../../components/Carousel'
import Listprod from '../../components/ListProd'
import Header from '../../components/Header'


export default function Home({navigation}){

    return(
        <View style={{flex: 1, backgroundColor: '#E0E094'}}>
            <Header navigation={navigation}/>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{backgroundColor: '#E0E094', flex: 1, paddingBottom: 50}}
            >
                <CarouselProd />
                <Listprod />
            </ScrollView>
        </View>
    )
}