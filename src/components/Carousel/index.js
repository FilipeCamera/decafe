import React, {useRef, useState, useEffect} from 'react'

import Carousel from 'react-native-snap-carousel'
import {View, Dimensions, Image} from 'react-native'
import { api } from '../../services/api'
export default function CarouselProd() {
    const carouselRef = useRef(null)
    const {width} = Dimensions.get('window')
    const [carouselData, setCarouselData] = useState([])

    useEffect(() => {
        async function loadPropaganda(){
            await api.get('/Propagandas.json').then(resp => {
                console.log(resp.data)
                const fetchedCarousel = []
                for(let key in resp.data){
                    fetchedCarousel.unshift({
                        ...resp.data[key],
                        id:key
                    })
                }
                setCarouselData(fetchedCarousel)
            })
        }
        loadPropaganda()
    }, [])

    function _renderItem({item}) {
        return(
            <View animation='bounceIn' useNativeDriver={true} style={{
                margin: 5,
                backgroundColor: '#FFF',
                height: 240,
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
                <Image  source={{uri: item.img_url}} style={{
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
                itemWidth={260}
                firstItem={1}
                inactiveSlideOpacity={0.5}
                data={carouselData}
                renderItem={_renderItem}
                style={{
                    padding: 5,
                }}
            />
        </View>
    )
}