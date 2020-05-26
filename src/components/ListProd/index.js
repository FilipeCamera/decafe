import React, { useEffect, useState, useContext } from "react";

import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import { api } from "../../services/api";
import AuthContext from "../../contexts/authContext";
import * as Animatable from "react-native-animatable";
const { height } = Dimensions.get("window");

export default function Listprod() {
  const { produtos, setProdutos } = useContext(AuthContext);
  const [prodData, setProdData] = useState([]);

  useEffect(() => {
    async function loadProduto() {
      await api.get("/Produtos.json").then((resp) => {
        console.log(resp.data);
        const fetchedProd = [];
        for (let key in resp.data) {
          fetchedProd.unshift({
            ...resp.data[key],
            id: key,
          });
        }
        setProdData(fetchedProd);
      });
    }
    loadProduto();
  }, []);

  return (
    <Animatable.View
      animation="slideInUp"
      delay={2000}
      duration={2000}
      useNativeDriver={true}
      style={styles.container}
    >
      <Text style={styles.title}>Produtos</Text>
      <SafeAreaView style={{ paddingBottom: 20 }}>
        {prodData.length ? (
          prodData.map((item) => (
            <Animatable.View animation='fadeIn' delay={3000} duration={2000} style={styles.boxContainer} key={item.id}>
              <Image style={styles.image} />
              <Text style={styles.titleBox}>{item.title}</Text>
              <Text style={styles.desc}>{item.desc}</Text>
              <Text style={styles.valor}>R$ {item.valor}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() =>
                  setProdutos([
                    ...produtos,
                    {
                      id: Date.now(),
                      name: item.title,
                      quant: 1,
                      valor: parseFloat(item.valor).toFixed(2),
                    },
                  ])
                }
              >
                <Feather name="shopping-cart" size={14} color="#845A49" />
              </TouchableOpacity>
            </Animatable.View>
          ))
        ) : (
          <View
            style={{
              flex: 1,
              height: height - height / 3,
              backgroundColor: "#845A49",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size="large" color="#E0E094" />
          </View>
        )}
      </SafeAreaView>
    </Animatable.View>
  );
}
