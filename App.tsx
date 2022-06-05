import {XRapidAPI_Host, XRapidAPI_Key} from "@env"
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const getCurrentWeather = async (city:string) => {
    const options = {
      method: 'GET',
      url: 'https://community-open-weather-map.p.rapidapi.com/weather',
      params: {
        q: city,
        // lat: '0',
        // lon: '0',
        // callback: 'test',
        // id: '2172797',
        // lang: 'null',
        // units: 'imperial',
        // mode: 'xml'
      },
      headers: {
        'X-RapidAPI-Host': XRapidAPI_Host,
        'X-RapidAPI-Key': XRapidAPI_Key
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    getCurrentWeather('Manila');
  }, [])
  

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});