import React from 'react'

import Login from './screens/Login'
import Pedidos from './screens/Pedidos'

import {TouchableOpacity} from 'react-native'

import {AppLoading} from 'expo'
import {useFonts} from '@use-expo/font'
import {createStackNavigator} from '@react-navigation/stack'
import DrawerNavigation from './routes/Drawer.routes'
import { Feather } from '@expo/vector-icons'
import Users from './screens/Users'
import Feedback from './screens/Feedback'

const Stack = createStackNavigator()

export default function Routes(){
    let loadedFont = useFonts({
        'brush-script-mt-italic': require('./assets/fonts/brush-script-mt-italic.ttf')
    })

    if(!loadedFont){
        return(
            <AppLoading />
        )
    } else {
        return(
            <Stack.Navigator>
                <Stack.Screen name='Login' component={Login} options={{
                    headerShown: false
                }}/>
                <Stack.Screen name='Home' component={DrawerNavigation} options={({navigation}) => ({
                    headerStyle: {
                        backgroundColor: '#E0E094',
                        borderBottomWidth: 0,
                        elevation: 0,
                        
                    },
                    headerLeft: false,
                    headerTitle: 'DêCafé Bistrô',
                    headerTitleAlign: 'left',
                    headerTitleStyle: {
                        color: '#845A49',
                        fontFamily: 'brush-script-mt-italic',
                        fontSize: 28
                    },
                    headerRight: () => (
                        <TouchableOpacity style={{marginRight: 20}} onPress={() => navigation.navigate('Pedidos')}>
                            <Feather name='shopping-bag' size={24} color='#845A49'/>
                        </TouchableOpacity>
                    )
                }

                )}/>
                <Stack.Screen name='Pedidos' component={Pedidos} options={({navigation}) => ({
                    headerStyle: {
                        backgroundColor: '#F8F8D9',
                        borderBottomWidth: 0,
                        elevation: 0,   
                    },
                    headerTitle: 'DêCafé Bistrô',
                    headerTitleStyle: {
                        marginLeft: 130,
                        color: '#845A49',
                        fontFamily: 'brush-script-mt-italic',
                        fontSize: 28
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={{marginLeft: 20, justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.goBack()}>
                            <Feather name='arrow-left' size={24} color='#845A49'/>
                        </TouchableOpacity>
                    )
                })}/>
                <Stack.Screen name='Usuario' component={Users} options={({navigation}) => ({
                    headerStyle: {
                        backgroundColor: '#F8F8D9',
                        borderBottomWidth: 0,
                        elevation: 0,   
                    },
                    headerTitle: 'DêCafé Bistrô',
                    headerTitleStyle: {
                        marginLeft: 130,
                        color: '#845A49',
                        fontFamily: 'brush-script-mt-italic',
                        fontSize: 28
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={{marginLeft: 20, justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.goBack()}>
                            <Feather name='arrow-left' size={24} color='#845A49'/>
                        </TouchableOpacity>
                    )
                })}/>
                <Stack.Screen name='Feedback' component={Feedback} options={({navigation}) => ({
                    headerStyle: {
                        backgroundColor: '#F8F8D9',
                        borderBottomWidth: 0,
                        elevation: 0,   
                    },
                    headerTitle: 'DêCafé Bistrô',
                    headerTitleStyle: {
                        marginLeft: 130,
                        color: '#845A49',
                        fontFamily: 'brush-script-mt-italic',
                        fontSize: 28
                    },
                    headerLeft: () => (
                        <TouchableOpacity style={{marginLeft: 20, justifyContent: 'center', alignItems: 'center'}} onPress={() => navigation.goBack()}>
                            <Feather name='arrow-left' size={24} color='#845A49'/>
                        </TouchableOpacity>
                    )
                })}/>
            </Stack.Navigator>
            
        )
    }
}

