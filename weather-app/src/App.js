import WeatherHome from "./components/WeatherHomeScreen";
import "./components/styles/style.css";
import { useEffect, useState } from "react";
// import { query } from "express";

function App() {
    //   const [weather, setWeather] = useState([]);
    const [search, setSearch] = useState(null); // this can go directly in the form for the search bar
    const [currentLocation, setCurrentLocation] = useState("");
    const [currentCity, setCurrentCity] = useState("");
  
    const api = {
      key: "cd51bfb08430241168a813edfe9e9d8f",
      base: "https://api.openweathermap.org/data/2.5/",
    };
  
    // when the user types a new location, you use setLocation to store the state and present it to the user
    // when user presses enter or clicks the search button you call setCurrentLocation
  
    useEffect(() => {
      //   if currentLocation is not empty -> then do a fetch to the API
      // console.log(search);
      if (currentCity !== "") {
        // fetch
        const url = `${api.base}weather?q=${currentCity}&units=metric&APPID=${api.key}`;
        console.log(url);
        fetch(url)
          .then((res) => res.json())
          .then((data) => {
            setSearch(data);
            //   setSearch("");
          });
      }
    }, [currentCity]);
  
    console.log(currentCity);
    console.log(search);
  return (
    <>
      <WeatherHome
        // weather={weather}
        // setWeather={setWeather}
        search={search}
        // setSearch={setSearch}
        // SearchWeatherLocation={SearchWeatherLocation}
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
        // currentCity={currentCity}
        setCurrentCity={setCurrentCity}
      />
      <main></main>
    </>
  );
}

export default App;
