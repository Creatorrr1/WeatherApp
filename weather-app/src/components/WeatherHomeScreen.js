import "./styles/style.css";

function WeatherHome(props) {
  const {
    // weather,
    search,
    // setSearch,
    // SearchWeatherLocation,
    currentLocation,
    setCurrentLocation,
    // currentCity,
    setCurrentCity,
  } = props;

  function handleSubmit(event) {
    event.preventDefault();
    setCurrentCity(currentLocation);
  }

  console.log(search);

  let searchData = null;

  if (search !== null) {
    searchData = (
      <>
        <div className="card">
          <div className="location-box">
            <li className="location">
              Location: {search.name}, {search.sys.country}
            </li>
          </div>
            <br/>
          <div className="location-box">
            <li className="location">Weather: {search.weather[0].main}</li>
            <br/>
            <li className="location">
              Weather Description: {search.weather[0].description}
            </li>
            <br/>
            <li className="location">Temperature: {search.main.temp}</li>
            <br/>
            <li className="location">
              Max Temperature: {search.main.temp_max}
            </li>
            <br/>
          </div>
        </div>
      </>
    );
  }

  const background = (search) => {
    if(search === null) {
      return "cover default"
    }
    if (search.main.temp < 10 && search.weather[0].main === "Clear") {
      return "hill"
    }
    if (search.main.temp > 23 && search.weather[0].main === "Haze") {
      return "reallySunny"
    }
    if (search.main.temp > 20 && search.weather[0].main === "Clear") {
      return "sunny"
    }
    if (search.main.temp > 23 && search.weather[0].main === "Clouds") {
      return "sunny"
    }
    if (search.weather[0].main === "Rain" && search.main.temp < 23) {
      return "rain"
    }
    if (search.weather[0].main === "Rain" && search.main.temp > 23) {
      return "sunRain"
    }
    if (search.weather[0].main === "Clouds" && search.main.temp < 23 && search.main.temp > 5) {
      return "clouds"
    }
    if (search.weather[0].main === "Snow") {
      return "snow"
    }
    if (search.main.temp < 0) {
      return "cold"
    }

  }

  //   function coverChange() {
  //     if (typeof search === null) {
  //       return "cover default";
  //     } else if (typeof search !== null) {
  //       if (search.main > 10) {
  //         return "cover warm";
  //       } else return "cover";
  //     }
  //   }

  //   let cover = coverChange();

  return (
    <header>
      <div
        className=//     ? search.main.temp > 40 //   typeof search === null // {
        //       ? "cover warm"
        //       : "cover"
        //     : "cover"
        //   coverChange()
        //   cover
        // {search === null ? "cover default" : "cover"}
        { background(search) }
      >
        <div className="space-box">
          <h1> The Mr.Weather App </h1>
        </div>
        <div className="space-box">
          <h2>Today's Weather</h2>
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="space-box">
              <input
                type="text"
                placeholder="Find Your City"
                className="search-bar"
                onChange={(searchEvent) =>
                  setCurrentLocation(searchEvent.target.value)
                }
                value={currentLocation}
                // onKeyPress={SearchWeatherLocation(search)}
              />
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
        <div>
          <ul className="cards">{searchData}</ul>
        </div>
      </div>
    </header>
  );
}

export default WeatherHome;
