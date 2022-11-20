import React from "react";
import { ISelectCityProp, ISelectCityState } from "../../types";
import "./index.scss";
class SelectCity extends React.Component<ISelectCityProp, ISelectCityState> {
  constructor(props: ISelectCityProp) {
    super(props);
    this.state = {
      city: "New York",
    };
  }

  componentDidMount() {
    this.props.makeApiCall(this.state.city);
  }

  componentDidUpdate(prevProps: ISelectCityProp, prevState: ISelectCityState) {
    if (prevState.city !== this.state.city) {
      this.props.makeApiCall(this.state.city);
    }
  }

  render() {
    const onChangeHandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const city = value;
      this.setState(() => ({ city }));
    };

    return (
      <div className="select-city">
        <label>
          <input
            type="radio"
            name="City"
            value="New York"
            id="New York"
            defaultChecked
            onChange={onChangeHandler}
          />
          New York
        </label>
        <label>
          <input
            type="radio"
            name="City"
            value="Chicago"
            id="Chicago"
            onChange={onChangeHandler}
          />
          Chicago
        </label>
        <label>
          <input
            type="radio"
            name="City"
            value="Washington"
            id="Washington"
            onChange={onChangeHandler}
          />
          Washington
        </label>
      </div>
    );
  }
}

export default SelectCity;
