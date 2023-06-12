const Weather = ({ data }) => {
        return (
          <>
            <div className="top">
              <p className="location">{data.name}</p>
              <h1 className="temp">{data.main.temp.toFixed()}° F</h1>
              <div className="app-name">Weather App</div>
            </div>
            <div className="bottom">
              <div className="feels">
                <p className="bold">{data.main.feels_like}°</p>
                <p>Feels like</p>
              </div>
              <div className="humidity">
                <p className="bold">{data.main.humidity}%</p>
                <p>Humidity</p>
              </div>
              <div className="wind">
                <p className="bold">{data.wind.speed.toFixed()} miles/hr</p>
                <p>Wind speed</p>
              </div>
            </div>
          </>
        );
      };
      export default Weather;
      