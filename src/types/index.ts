export interface ISelectCityProp {
  makeApiCall: (city: string) => Promise<void>;
  city: string | undefined;
}

export interface ISelectCityState {
  city: string;
}

export interface IWeatherBox {
  date: string;
  icon: string;
  temp: number;
  weather_desc: string;
}

export interface IAppState {
  city: string | undefined;
  days: IWeatherBox[];
}

export interface IForcastWeatherBoxesProps {
  days: IWeatherBox[] | [];
}

export interface ITodayWeatherProps {
  data: IWeatherBox;
  city: string | undefined;
}

export interface IApiData {
  city: {
    coord: {
      lat: number;
      lon: number;
    };
    country: string;
    id: number;
    name: string;
    population: number;
    sunrise: number;
    sunset: number;
    timezone: number;
  };
  cnt: number;
  cod: string;
  list: [
    {
      clouds: { all: number };
      dt: number;
      dt_txt: string;
      main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_kf: number;
        temp_max: number;
        temp_min: number;
      };
      pop: number;
      sys: {
        pod: string;
      };
      visibility: number;
      weather: [
        {
          id: number;
          main: string;
          description: string;
          icon: string;
        }
      ];
      wind: {
        speed: number;
        deg: number;
        gust: number;
      };
    }
  ];
  message: number;
}
