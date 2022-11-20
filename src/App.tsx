import React from "react";
import ForcastWeatherBoxes from "./components/ForcastWeatherBoxes";
import SelectCity from "./components/SelectCity";
import TodayWeatherBox from "./components/TodayWeather";
import { IApiData } from "./types";
import "./App.scss";

const forcastDays = 5;

class App extends React.Component {
  state = {
    city: undefined,
    days: new Array(5),
  };

  updateState = (data: IApiData) => {
    var city = data.city.name;
    var days: any = [];
    const dayIndices = this.getDayIndices(data);

    for (let i = 0; i < forcastDays; i++) {
      days.push({
        date: data.list[dayIndices[i]].dt_txt,
        weather_desc: data.list[dayIndices[i]].weather[0].description,
        icon: data.list[dayIndices[i]].weather[0].icon,
        temp: data.list[dayIndices[i]].main.temp,
      });
    }

    this.setState((prev) => ({ ...prev, city, days }));
  };

  makeApiCall = async (city: string) => {
    const api_data = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`
    ).then((resp) => resp.json());
    if (api_data.cod === "200") {
      this.updateState(api_data);
    }
  };

  getDayIndices = (data: IApiData) => {
    let dayIndices = [];
    dayIndices.push(0);

    let index = 0;
    let tmp = data.list[index].dt_txt.slice(8, 10);

    for (let i = 0; i < forcastDays - 1; i++) {
      while (
        tmp === data.list[index].dt_txt.slice(8, 10) ||
        data.list[index].dt_txt.slice(11, 13) !== "15"
      ) {
        index++;
      }
      dayIndices.push(index);
      tmp = data.list[index].dt_txt.slice(8, 10);
    }
    return dayIndices;
  };

  render() {
    return (
      <div className="container">
        <div className="container__content">
          <SelectCity makeApiCall={this.makeApiCall} city={this.state.city} />
          {this.state.city && (
            <div className="container__weather">
              <TodayWeatherBox
                data={this.state.days[0]}
                city={this.state.city}
              />
              <ForcastWeatherBoxes days={this.state.days} />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
