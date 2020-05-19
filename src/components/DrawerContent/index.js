import React from 'react'

import {View} from 'react-native'
import {Drawer, Avatar, Title, Text,} from 'react-native-paper'
import {DrawerItem, DrawerContentScrollView} from '@react-navigation/drawer'
import {Feather, MaterialIcons} from '@expo/vector-icons'
import styles from './styles'

export default function DrawerContent(props){
    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.boxAvatar}>
                        <View>
                            <Avatar.Image
                                size={140}
                            />
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSec}>
                        <Drawer.Item
                            style={{width: '100%'}}
                            icon={() => <Feather name='home' size={24} color='#845A49' style={{marginLeft: 70}}/>}
                            label='Home'
                            onPress={() => props.navigation.navigate('Home')}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSec}>
                        <Drawer.Item
                            style={{width: '100%'}} 
                            icon={() => <Feather name='user' size={24} color='#845A49' style={{marginLeft: 70}}/>}
                            label='Usuário'
                            onPress={() => props.navigation.navigate('Usuario')}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSec}>
                        <Drawer.Item
                            style={{width: '100%'}} 
                            icon={() => <Feather name='shopping-bag' size={24} color='#845A49' style={{marginLeft: 70}}/>}
                            label='Pedidos'
                            onPress={() => props.navigation.navigate('Pedidos')}
                        />
                    </Drawer.Section>
                    <Drawer.Section style={styles.drawerSec}>
                        <Drawer.Item
                            style={{width: '100%'}} 
                            icon={() => <MaterialIcons name='feedback' size={24} color='#845A49' style={{marginLeft: 70}}/>}
                            label='Feedback'
                            onPress={() => props.navigation.navigate('Feedback')}
                        />
                    </Drawer.Section>
                </View>

            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSec}>
                <Drawer.Item
                    style={{width: '100%'}} 
                    icon={() => <Feather name='log-out' size={24} color='#845A49'/>}
                    label='Sign Out'
                    onPress={() => props.navigation.navigate('Login')}
                />
            </Drawer.Section>
        </View>
    )
}