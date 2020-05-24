import React, { useState, useContext, useEffect } from "react";

import styles from "./styles";
import { Switch, Button, TextInput, Dialog } from "react-native-paper";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { HeaderTwo } from "../../components/Header";
import { Checkbox } from "react-native-paper";
import { Feather } from "@expo/vector-icons";
import AuthContext from "../../contexts/authContext";

export default function Pedidos({ navigation }) {
  const { produtos, setProdutos } = useContext(AuthContext);

  const [refri, setRefri] = useState(false);
  const [cartao, setCartao] = useState(false);
  const [dinheiro, setDinheiro] = useState(false);
  const [local, setLocal] = useState(false);
  const [entrega, setEntrega] = useState(false);
  const [total, setTotal] = useState(0);
  const [location, setLocation] = useState("");
  const [visible, setVisible] = useState(false);
  const [checked, setChecked] = useState(false);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  useEffect(() => {
    function loadTotal() {
      let total = 0;
      for (let key in produtos) {
        total += produtos[key].quant * produtos[key].valor;
        setTotal(total);
        if (produtos[key].name == "Refrigerante") {
          setRefri(true);
          console.log(refri);
        }
        if (produtos[key].name !== "Refrigerante") {
          setRefri(false);
          console.log(refri);
        }
      }
    }
    return produtos.length === 0 ? setTotal(0) : loadTotal();
  });
  function removeProd(id) {
    setProdutos(produtos.filter((produto) => produto.id !== id));
  }
  function addQuant(id) {
    setProdutos(
      produtos.filter((produto) =>
        produto.id == id ? (produto.quant += 1) : produto.quant
      )
    );
  }
  function removeQuant(id) {
    setProdutos(
      produtos.filter((produto) =>
        produto.id == id ? (produto.quant -= 1) : produto.quant
      )
    );
  }
  function showDialog() {
    setVisible(true);
  }
  function hideDialog() {
    setVisible(false);
  }
  return (
    <View style={{ flex: 1, backgroundColor: "#F8F8D9" }}>
      <HeaderTwo navigation={navigation} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          backgroundColor: "#F8F8D9",
          paddingBottom: 10,
        }}
      >
        <Text style={styles.title}>Pedidos</Text>
        <View style={styles.box}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>Nome</Text>
            <Text style={styles.headerTitle2}>Quant</Text>
            <Text style={styles.headerTitle}>Preço</Text>
          </View>
          {produtos.map((item) => (
            <View style={styles.boxList} key={item.id}>
              <View style={styles.boxIntList}>
                <Text style={styles.boxText}>{item.name}</Text>
                <View style={styles.boxQuant}>
                  <TouchableOpacity onPress={() => removeQuant(item.id)}>
                    <Feather name="minus" size={18} color="#845A49" />
                  </TouchableOpacity>
                  <Text style={styles.boxTextQV}>{item.quant}</Text>
                  <TouchableOpacity onPress={() => addQuant(item.id)}>
                    <Feather name="plus" size={18} color="#845A49" />
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={styles.boxTextQV}>R$ {item.valor}</Text>
                  <TouchableOpacity onPress={() => removeProd(item.id)}>
                    <Feather name="x" size={18} color="#845A49" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          ))}
          <View style={styles.footer}>
            <Text style={styles.footerTitle}>Total: </Text>
            <Text style={styles.footerText}>R$ {total.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.box2}>
          <Text style={styles.box2Title}>Opcionais</Text>
          {refri === true ? (
            <View style={styles.box2Intern}>
              <Text style={styles.txtTitle}>Sabor do refrigerante:</Text>
              <View
                style={{ flexDirection: "row", justifyContent: "space-around" }}
              >
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Checkbox
                    color="#845A49"
                    status={checked ? "checked" : "unchecked"}
                    onPress={() => setChecked(!checked)}
                  />
                  <Text style={styles.modeText}>Coca</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Checkbox
                    color="#845A49"
                    status={checked1 ? "checked" : "unchecked"}
                    onPress={() => setChecked1(!checked1)}
                  />
                  <Text style={styles.modeText}>Guaraná</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Checkbox
                    color="#845A49"
                    status={checked2 ? "checked" : "unchecked"}
                    onPress={() => setChecked2(!checked2)}
                  />
                  <Text style={styles.modeText}>Fanta</Text>
                </View>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <Checkbox
                    color="#845A49"
                    status={checked3 ? "checked" : "unchecked"}
                    onPress={() => setChecked3(!checked3)}
                  />
                  <Text style={styles.modeText}>Sprite</Text>
                </View>
              </View>
            </View>
          ) : null}
          <View style={styles.box2Intern}>
            <Text style={styles.txtTitle}>Forma de pagamento:</Text>
            <View style={styles.mode}>
              <Text style={styles.modeText}>Cartão</Text>
              <Switch
                value={cartao}
                onValueChange={() => (setCartao(true), setDinheiro(false))}
              />
            </View>
            <View style={styles.mode}>
              <Text style={styles.modeText}>Dinheiro</Text>
              <Switch
                value={dinheiro}
                onValueChange={() => (setDinheiro(true), setCartao(false))}
              />
            </View>
          </View>
          <View style={styles.box2Intern}>
            <Text style={styles.txtTitle}>Retirada:</Text>
            <View style={styles.mode}>
              <Text style={styles.modeText}>Local</Text>
              <Switch
                value={local}
                onValueChange={() => (setLocal(true), setEntrega(false))}
              />
            </View>
            <View style={styles.mode}>
              <Text style={styles.modeText}>Entrega</Text>
              <Switch
                value={entrega}
                onValueChange={() => (
                  setEntrega(true), setLocal(false), showDialog()
                )}
              />
            </View>
          </View>
        </View>
        <Dialog
          visible={visible}
          onDismiss={hideDialog}
          style={{ elevation: 5 }}
        >
          <Text
            style={{
              marginTop: 5,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: "#845A49",
            }}
          >
            Entrega
          </Text>
          <Dialog.Content>
            <Text
              style={{
                textAlign: "center",
                marginTop: 10,
                marginBottom: 5,
                fontSize: 14,
                color: "#4F4F4F",
              }}
            >
              Digite o seu endereço
            </Text>
            <TextInput
              style={{ height: 50 }}
              value={location}
              mode="outlined"
              selectionColor="#845A49"
              onChangeText={setLocation}
              clearButtonMode="always"
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button mode="text" color="#845A49" onPress={hideDialog}>
              ok
            </Button>
          </Dialog.Actions>
        </Dialog>
        <Button
          onPress={() => console.log('finalizado')}
          mode="contained"
          style={{ marginTop: 40, backgroundColor: "#845A49" }}
        >
          Finalizar Pedido
        </Button>
      </ScrollView>
    </View>
  );
}
