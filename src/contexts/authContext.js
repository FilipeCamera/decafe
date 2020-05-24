import React, { createContext, useState, useEffect } from "react";


import { AsyncStorage } from "react-native";
import * as Google from "expo-google-app-auth";
import {View, ActivityIndicator} from 'react-native'
import {ANDROID_CLIENT_ID} from '../../.env.json'
const authContextData = {
  signed: Boolean,
  user: Object,
  produtos: [],
  signInWithGoogleAsync: () => {},
  signOut: () => {},
};


const AuthContext = createContext({ authContextData });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  const [produtos, setProdutos] = useState([])
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
        androidClientId: ANDROID_CLIENT_ID,
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
        value={{ signed: !!user, user, signInWithGoogleAsync, signOut, produtos, setProdutos }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
};

export default AuthContext;
