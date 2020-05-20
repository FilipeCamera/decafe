import React, {useState} from 'react'

import styles from'./styles'
import {Switch, Button, TextInput, Dialog} from 'react-native-paper'
import {View, Text, ScrollView, Alert} from 'react-native'

export default function Pedidos(){
    const [cartao, setCartao] = useState(false)
    const [dinheiro, setDinheiro] = useState(false)
    const [local, setLocal] = useState(false)
    const [entrega, setEntrega] = useState(false)

    const [location, setLocation] = useState('')
    const [visible, setVisible] = useState(false)


    function showDialog(){
        setVisible(true)
        
    }
    function hideDialog(){
        setVisible(false)
    }
    return(
        <ScrollView 
            contentContainerStyle={{
                flexGrow: 1, 
                alignItems: 'center',
                backgroundColor: '#F8F8D9',
                paddingBottom: 10,
            }} 
            
        >
            <Text style={styles.title}>Pedidos</Text>
            <View style={styles.box}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Nome</Text>
                    <Text style={styles.headerTitle}>Quant</Text>
                    <Text style={styles.headerTitle}>Preço</Text>
                </View>
                <View></View>
                <View style={styles.footer}>
                    <Text style={styles.footerTitle}>Total:</Text>
                </View>
            </View>
            <View style={styles.box2}>
                <Text style={styles.box2Title}>Opcionais</Text>
                <View style={styles.box2Intern}>
                    <Text style={styles.txtTitle}>Forma de pagamento:</Text>
                    <View style={styles.mode}>
                        <Text style={styles.modeText}>Cartão</Text>
                        <Switch value={cartao} onValueChange={() => (
                            setCartao(true),
                            setDinheiro(false)
                        )}/>
                    </View>
                    <View style={styles.mode}>
                        <Text style={styles.modeText}>Dinheiro</Text>
                        <Switch value={dinheiro} onValueChange={() => (
                            setDinheiro(true),
                            setCartao(false)
                        )}/>
                    </View>
                </View>
                <View style={styles.box2Intern}>
                    <Text style={styles.txtTitle}>Retirada:</Text>
                    <View style={styles.mode}>
                        <Text style={styles.modeText}>Local</Text>
                        <Switch value={local} onValueChange={() => (
                            setLocal(true),
                            setEntrega(false)
                        )}/>
                    </View>
                    <View style={styles.mode}>
                        <Text style={styles.modeText}>Entrega</Text>
                        <Switch value={entrega} onValueChange={() => (
                            setEntrega(true),
                            setLocal(false),
                            showDialog()
                        )}/>
                    </View>
                </View>
            </View>
            <Dialog
                visible={visible}
                onDismiss={hideDialog}
                style={{elevation: 5}}
            >
                <Text style={{
                    marginTop: 5,
                    textAlign: 'center', 
                    fontWeight: 'bold',
                    fontSize: 16,
                    color: '#845A49'
                }}>Entrega</Text>
                <Dialog.Content>
                    <Text style={{
                        textAlign: 'center',
                        marginTop: 10,
                        marginBottom: 5,
                        fontSize: 14,
                        color: '#4F4F4F'
                    }}>Digite o seu endereço</Text>
                    <TextInput
                        style={{height: 50}}
                        value={location} 
                        mode='outlined' 
                        selectionColor='#845A49'
                        onChangeText={setLocation}
                        clearButtonMode='always'
                    />
                </Dialog.Content>
                <Dialog.Actions>
                    <Button mode='text' color='#845A49' onPress={hideDialog}>ok</Button>
                </Dialog.Actions>
            </Dialog>
            <Button mode='contained' style={{marginTop: 40, backgroundColor: '#845A49'}}>Finalizar Pedido</Button>
        </ScrollView>
        
    )
}