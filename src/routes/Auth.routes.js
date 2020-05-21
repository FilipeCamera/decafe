import React from 'react'

import Login from '../screens/Login'

import {createStackNavigator} from '@react-navigation/stack'


const Stack = createStackNavigator()

export default function AuthRoute(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} options={{
                headerShown: false
            }}/>
        </Stack.Navigator>        
    )
}
