import React from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'

export default function Loading({navigation}){
    const loadFont = async() => await Font.loadAsync({
        'brush-script-mt-italic': require('../../../assets/fonts/brush-script-mt-italic.ttf')
    })
    return(
        <AppLoading startAsync={loadFont} onFinish={() => navigation.navigate('Home')}/>
    )
}