import {XRapidAPI_Host, XRapidAPI_Key} from "@env"
import axios from 'axios';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { KelvinToCelsius } from "./src/utils/Conversions";

export default function App() {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfo|null>();

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
      setWeatherInfo(response.data)
    }).catch(function (error) {
      console.error(error);
    });
  }

  useEffect(() => {
    getCurrentWeather('Manila');
  }, []);

  const renderWeatherPattern = (description: string) => { 
    switch (description) {
      case "broken clouds": 
        return (<View style={{flexDirection:"row",}}>
          <FontAwesome5 name="cloud" size={60} color="black" style={{marginTop:20, marginRight:-20}} />
          <FontAwesome5 name="cloud-sun" size={60} color="black" />
        </View>)
      case "few clouds":
        return (<View style={{flexDirection:"row"}}>
          <FontAwesome5 name="cloud" size={30} color="black" />
          <FontAwesome5 name="cloud" size={50} color="black" style={{marginTop:20, marginLeft:-10}} />
          <FontAwesome5 name="cloud" size={40} color="black" style={{marginTop:0, marginLeft:-5}} />
        </View>)
      case "scattered clouds":
        return (<View style={{flexDirection:"row"}}>
          <FontAwesome5 name="cloud" size={30} color="black" />
          <FontAwesome5 name="cloud" size={50} color="black" style={{marginTop:20, marginLeft:-5}} />
        </View>)
      default:
        break;
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={{fontWeight:"bold", fontSize:50}}>{KelvinToCelsius(weatherInfo?.main.temp).toFixed(2)}°C</Text>
      <Text style={{fontSize:25}}>{weatherInfo?.weather[0].description}</Text>
      <View style={{margin:10}}/>
      {renderWeatherPattern(weatherInfo?.weather[0].description)}
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