import React from 'react'

import {View, Text} from 'react-native'
import {Button, TextInput} from 'react-native-paper'
import styles from './styles'
import { HeaderTwo } from '../../components/Header'

export default function Feedback({navigation}){
    return(
        <View style={{flex: 1, backgroundColor: '#F8F8D9'}}>
            <HeaderTwo navigation={navigation}/>
            <View style={styles.container}>
                <Text style={styles.title}>Feedback</Text>
                <TextInput 
                    mode='outlined' 
                    multiline={true}
                    numberOfLines={10}
                    selectionColor='#845A49'
                    underlineColor='#845A49' 
                    style={{width: 300, fontSize: 16, marginTop: 20}}
                    clearTextOnFocus
                />
                <Button mode='contained' style={{
                    backgroundColor: '#845A49', 
                    marginTop: 20, 
                    position: 'relative',
                    left: 100,
                    width: 100,
                }} onPress={() => {}}>Enviar</Button>
            </View>
        </View>
    )
}