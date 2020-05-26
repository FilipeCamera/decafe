import React, { useState, useContext } from "react";

import AuthContext from "../../contexts/authContext";
import { useFonts } from "@use-expo/font";
import { View, ImageBackground, TouchableOpacity, Text } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

import * as Animatable from "react-native-animatable";

import styles from "./styles";

export default function Login() {
  const { signInWithGoogleAsync } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <View style={styles.boxImage}>
        <ImageBackground
          source={require("../../images/background3.png")}
          style={styles.imgBackground}
        />
      </View>
      <Animatable.View
        animation="fadeInUp"
        duration={2000}
        useNativeDriver={true}
        style={styles.boxButton}
      >
        <Animatable.View
          animation="fadeIn"
          delay={2000}
          duration={1000}
          useNativeDriver={true}
        >
          <Animatable.View
            animation="rubberBand"
            delay={2000}
            duration={3000}
            style={styles.boxIcon}
          >
            <Animatable.View animation="pulse" iterationCount="infinite">
              <Feather name="coffee" size={30} color="#754C3B" />
            </Animatable.View>
          </Animatable.View>
        </Animatable.View>
        <Animatable.View
          animation="lightSpeedIn"
          duration={2400}
          delay={3000}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={signInWithGoogleAsync}
          >
            <FontAwesome name="google" size={24} color="#797979" />
            <Text style={{ color: "#797979", fontSize: 16 }}>
              Sign in with Google
            </Text>
          </TouchableOpacity>
        </Animatable.View>
        <Animatable.View
          animation="slideInUp"
          delay={2500}
          duration={2000}
          useNativeDriver={true}
          style={{
            alignItems: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 10,
          }}
        >
          <Feather name="instagram" size={24} color="#E0E094" />
          <Text
            style={{
              fontSize: 14,
              color: "#E0E094",
              marginLeft: 5,
              fontWeight: "900",
            }}
          >
            decafe_bistro
          </Text>
        </Animatable.View>
      </Animatable.View>
    </View>
  );
}
