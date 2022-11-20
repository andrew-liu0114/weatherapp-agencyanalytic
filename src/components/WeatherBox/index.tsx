import React from "react";
import { IWeatherBox } from "../../types";
import "./index.scss";

export default class WeatherBox extends React.Component<IWeatherBox, {}> {
  getDay = (date: string) => {
    let weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    return weekday[new Date(date).getDay()];
  };

  render() {
    return (
      <div className="weather-box">
        <h1 className="weather-box__title">
          {this.props.date ? this.getDay(this.props.date) : ""}
        </h1>
        <img
          src={
            this.props
              ? require(`../../assets/icons/${this.props.icon}.svg`)
              : require("../../assets/icons/01d.svg")
          }
          alt="sun"
          className="weather-box__icon"
        />
        <span className="weather-box__temp">
          {Math.round(this.props.temp - 273.15)}°
        </span>
      </div>
    );
  }
}
