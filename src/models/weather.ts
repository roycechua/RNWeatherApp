
type Coordinate = {
    "lat": number,
    "lon": number,
}

type Cloud = {
    "all": number,
}

type Main = {
    "feels_like": number,
    "humidity": number,
    "pressure": number,
    "temp": number,
    "temp_max": number,
    "temp_min": number,
}

type Sys = {
    "country": string,
    "id": number,
    "sunrise": number,
    "sunset": number,
    "type": number,
}

type Wind = {
    "deg": number,
    "gust": number,
    "speed": number,
}

type Weather = {
    "description": string,
    "icon": string,
    "id": number,
    "main": string,
  }

type WeatherInfo = {
    "base": string,
    "clouds": Cloud,
    "cod": number,
    "coord": Coordinate,
    "dt": number,
    "id": number,
    "main": Main,
    "name": string,
    "sys": Sys,
    "timezone": number,
    "visibility": number,
    "weather": Weather[],
    "wind": Wind,
}