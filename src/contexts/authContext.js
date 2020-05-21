import React, { createContext, useState, useEffect } from "react";

import { AsyncStorage } from "react-native";
import {useFonts} from '@use-expo/font';
import androidClientId from "../config/client_id";
import * as Google from "expo-google-app-auth";
import { AppLoading } from "expo";

const authContextData = {
  signed: Boolean,
  user: Object,
  signInWithGoogleAsync: () => {},
  signOut: () => {},
};

const AuthContext = createContext({ authContextData });

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadStorage(){
      const AuthStorage = await AsyncStorage.getItem('AuthUser')
      if(AsyncStorage){
        setUser(JSON.parse(AuthStorage))
      }
    }
    loadStorage()
  }, [])

  let loadedFont = useFonts({
    'brush-script-mt-italic': require('../../assets/fonts/brush-script-mt-italic.ttf')
  })

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
  if(!loadedFont){
    return(
      <AppLoading />
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
