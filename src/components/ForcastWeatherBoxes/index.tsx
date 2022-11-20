import React from "react";
import { IForcastWeatherBoxesProps } from "../../types";
import WeatherBox from "../WeatherBox";
import "./index.scss";

class ForcastWeatherBoxes extends React.Component<
  IForcastWeatherBoxesProps,
  IForcastWeatherBoxesProps
> {
  constructor(props: IForcastWeatherBoxesProps) {
    super(props);
    this.state = {
      days: this.props.days,
    };
  }

  componentDidUpdate(
    prevProps: IForcastWeatherBoxesProps,
    prevState: IForcastWeatherBoxesProps
  ) {
    if (prevState.days !== this.props.days) {
      this.setState((prev) => ({ ...prev, days: this.props.days }));
    }
  }

  render() {
    return (
      <div className="forcast-wrapper">
        {this.state.days.slice(1).map((day) => (
          <WeatherBox key={day.date} {...day} />
        ))}
      </div>
    );
  }
}

export default ForcastWeatherBoxes;
