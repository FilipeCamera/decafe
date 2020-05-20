import React from 'react'

import Users from '../screens/Users'
import Feedback from '../screens/Feedback'
import Login from '../screens/Login'

import {createDrawerNavigator} from '@react-navigation/drawer'
import Home from '../screens/Home'
import DrawerContent from '../components/DrawerContent'
import Pedidos from '../screens/Pedidos'


const Drawer = createDrawerNavigator()

export default function DrawerNavigation({route}){
    return(
        <Drawer.Navigator 
            initialRouteName='Home' 
            drawerContent={props => <DrawerContent {...props} {...route}/>}
        >
            <Drawer.Screen name='Home' component={Home} />
            <Drawer.Screen name='UsuarioDrawer' component={Users} />
            <Drawer.Screen name='PedidosDrawer' component={Pedidos}/>
            <Drawer.Screen name='FeedbackDrawer' component={Feedback}/>
            <Drawer.Screen name='Sair' component={Login}/>
        </Drawer.Navigator>
    )
}