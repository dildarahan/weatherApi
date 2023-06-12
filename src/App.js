import "./App.css";
import React from "react";
import Search from "./components/Search";
import Weather from "./components/Weather";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "",
      data: {}
    };
  }
  getCity = (string) => {
    this.setState({ city: string });
  };
  submitForm = (e) => {
    e.preventDefault();
    //what happens here?
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=d030ac84773f6c1da5dcb6a7fe964373&units=imperial`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data: data, city: "" }));
  };
  render() {
    const { city, data } = this.state;
    return (
      <div className="App">
        <div className="container">
          <Search
            city={city}
            getCity={this.getCity}
            submitForm={this.submitForm}
          />
          {Object.keys(data).length !== 0 ? <Weather data={data} /> : null}
        </div>
      </div>
    );
  }
}
export default App;
