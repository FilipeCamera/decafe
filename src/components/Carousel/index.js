import React, {useRef} from 'react'

import Carousel from 'react-native-snap-carousel'
import {View, Text, Dimensions, Image} from 'react-native'

export default function CarouselProd() {
    const carouselRef = useRef(null)
    const {width} = Dimensions.get('window')
    const carouselList = [
        {
            img: 'https://www.graogourmet.com/wp-content/uploads/2016/08/Caf%C3%A9-e-sa%C3%BAde_800_600-1280x720.jpg'
        },
        {
            img: 'https://www.graogourmet.com/wp-content/uploads/2016/08/Caf%C3%A9-e-sa%C3%BAde_800_600-1280x720.jpg'
        },
        {
            img: 'https://www.graogourmet.com/wp-content/uploads/2016/08/Caf%C3%A9-e-sa%C3%BAde_800_600-1280x720.jpg'
        }
    ]

    function _renderItem({item}) {
        return(
            <View style={{
                margin: 5,
                backgroundColor: '#FFF',
                height: 180,
                borderRadius: 10,
                shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                shadowOpacity: 0.5,
                shadowRadius: 10,
                elevation: 5
            }}>
                <Image source={{uri: item.img}} style={{
                    borderRadius: 10, 
                    width: '100%', 
                    height: '100%',
                    backgroundColor: 'rgba(0,0,0, 0.5)'
                }}/>
            </View>
        )
    }

    return(
        <View style={{alignItems: 'center', marginTop: 20}}>
            <Carousel
                layout='default'
                ref={carouselRef}
                hasParallaxImages={true}
                sliderWidth={width}
                itemWidth={250}
                firstItem={1}
                inactiveSlideOpacity={0.5}
                data={carouselList}
                renderItem={_renderItem}
                style={{
                    padding: 5,
                }}
            />
        </View>
    )
}