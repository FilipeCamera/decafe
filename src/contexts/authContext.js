import React, { createContext, useState, useEffect } from "react";

import { AsyncStorage } from "react-native";
import {useFonts} from '@use-expo/font';
import androidClientId from "../config/client_id";
import * as Google from "expo-google-app-auth";
import {View, ActivityIndicator} from 'react-native'

const authContextData = {
  signed: Boolean,
  user: Object,
  signInWithGoogleAsync: () => {},
  signOut: () => {},
};

const AuthContext = createContext({ authContextData });

export const AuthProvider = ({ children }) => {
  let loadedFont = useFonts({
    'brush-script-mt-italic': require('../../assets/fonts/brush-script-mt-italic.ttf')
  })
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function loadStorage(){
      const AuthStorage = await AsyncStorage.getItem('AuthUser')
      console.log(AuthStorage)
      if(AuthStorage){
        setUser(JSON.parse(AuthStorage))
        setLoading(false)
      } else {
        setLoading(false)
      }
    }
    loadStorage()
  }, [])

  async function signInWithGoogleAsync() {
    try {
      const result = await Google.logInAsync({
        androidClientId: androidClientId,
        scopes: ["profile", "email"],
      });

      if (result.type === "success") {
        setUser({
          name: result.user.name,
          photoUrl: result.user.photoUrl,
        });
        await AsyncStorage.setItem('AuthUser', JSON.stringify(result.user))
      } else {
        return console.log("Cancelled");
      }
    } catch (e) {
      return console.log("Error", e);
    }
  }
  function signOut() {
    AsyncStorage.clear().then(() => (
      setUser(null)
    )).catch(e => (
      console.log(e)
    ))
  }
  if(loading){
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size='large' color='#845A49'/>
      </View>
    )
  } else{
    return (
      <AuthContext.Provider
        value={{ signed: !!user, user, signInWithGoogleAsync, signOut }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
};

export default AuthContext;
