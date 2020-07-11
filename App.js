import React, {useState} from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider } from "./src/contexts/appContext";
import  {AppLoading} from 'expo';
import * as Font from 'expo-font';
import Routes from "./src/routes";


export default function App() {
  const [loaded, setLoaded] = useState(false)
  async function loadingFont(){
    await Font.loadAsync({
      'brush-script-mt-italic': require('./assets/fonts/brush-script-mt-italic.ttf')
    })
  }
  if(loaded){
    return (
      <>
        <StatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <ApplicationProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ApplicationProvider>
      </>
    );
  }
  return(
    <AppLoading startAsync={loadingFont} onFinish={() => setLoaded(true)}/>
  )
}
