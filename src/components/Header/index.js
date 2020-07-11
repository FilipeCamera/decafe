import React, { useContext } from "react";

import { View, Text, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { Feather } from "@expo/vector-icons";
import ApplicationContext from "../../contexts/appContext";

export function HeaderTwo({ navigation }) {
  return (
    <View
      style={{
        marginTop: 40,
        marginBottom: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Feather name="arrow-left" size={25} color="#845A49" />
      </TouchableOpacity>
      <Text
        style={{
          color: "#845A49",
          fontSize: 30,
          fontFamily: "brush-script-mt-italic",
        }}
      >
        DêCafé Bistrô
      </Text>
    </View>
  );
}

export default function Header({ navigation }) {
  const { produtos } = useContext(ApplicationContext);
  return (
    <View
      style={{
        marginTop: 40,
        marginBottom: 10,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <Animatable.Text
        animation="bounceInLeft"
        duration={2000}
        delay={2000}
        style={{
          color: "#845A49",
          fontSize: 30,
          fontFamily: "brush-script-mt-italic",
        }}
      >
        DêCafé Bistrô
      </Animatable.Text>
      <Animatable.View
        animation="bounceInUp"
        duration={2000}
        delay={2000}
        style={{ 
          flexDirection: "row",
          alignItems: 'center' 
        }}
      >
        <Text style={{fontSize: 16, color: '#845A49', paddingRight: 5}}>{produtos.length != 0 ? `+${produtos.length}` : ""}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Pedidos")}>
          <Feather name="shopping-bag" size={25} color="#845A49" />
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
