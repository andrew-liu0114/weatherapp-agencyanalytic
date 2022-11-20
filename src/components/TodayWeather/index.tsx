import React from "react";
import { ITodayWeatherProps } from "../../types";
import "./index.scss";

export default class TodayWeatherBox extends React.Component<ITodayWeatherProps> {
  capitalize = (str: string) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  render() {
    return (
      <div className="weather-today">
        <span className="title">Today</span>
        <div
          className="today"
          style={{
            visibility: this.props.city ? "visible" : "hidden",
            opacity: this.props.city ? "1" : "0",
          }}
        >
          <img
            src={
              this.props.data
                ? require(`../../assets/icons/${this.props.data.icon}.svg`)
                : require("../../assets/icons/01d.svg")
            }
            alt="sun"
            style={{
              visibility: this.props.city ? "visible" : "hidden",
              opacity: this.props.city ? "1" : "0",
            }}
          />
          <div className="temp">
            <p>
              {this.props.data ? Math.round(this.props.data.temp - 273.15) : 0}°
            </p>
            <p>
              {this.props.data
                ? this.capitalize(this.props.data.weather_desc)
                : ""}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
