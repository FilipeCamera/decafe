import React from 'react'

import Carousel from 'react-native-snap-carousel'
import {View, Text} from 'react-native'

export default function CarouselProd() {
    const carouselList = [
        {
            title: 'item 1'
        },
        {
            title: 'item 2'
        },
        {
            title: 'item 3'
        }
    ]

    function _renderItem({item}) {
        return(
            <View style={{
                backgroundColor: '#FFF',
                height: 160,
                borderRadius: 10,
            }}>
                <Text>{item.title}</Text>
            </View>
        )
    }

    return(
        <View style={{alignItems: 'center', marginTop: 20}}>
            <Carousel
                layout='default'
                sliderWidth={320}
                itemWidth={250}
                data={carouselList}
                renderItem={_renderItem}
                style={{
                    padding: 5
                }}
            />
        </View>
    )
}