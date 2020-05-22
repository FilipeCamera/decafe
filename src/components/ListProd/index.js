import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import styles from "./styles";
import { api } from "../../services/api";

export default function Listprod() {
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
    <View style={styles.container}>
      <Text style={styles.title}>Produtos</Text>
      <SafeAreaView style={{ paddingBottom: 20 }}>
        {prodData.length ? (
          prodData.map((item) => (
            <View style={styles.boxContainer} key={item.id}>
                <Image style={styles.image} />
                <Text style={styles.titleBox}>{item.title}</Text>
                <Text style={styles.desc}>{item.desc}</Text>
                <Text style={styles.valor}>R$ {item.valor}</Text>
                <TouchableOpacity style={styles.button}>
                    <Feather name="shopping-cart" size={14} color="#845A49" />
                </TouchableOpacity>
            </View>
          ))
        ) : (
          <View
            style={{
              flex: 1,
              height: 400,
              backgroundColor: "#845A49",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ActivityIndicator size='large' color='#E0E094'/>
          </View>
        )}
      </SafeAreaView>
    </View>
  );
}
