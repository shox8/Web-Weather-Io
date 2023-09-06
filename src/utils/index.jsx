import axios from "axios";

export const getWeather = (location, setstate) => {
  axios
    .get(
      `https://api.weatherapi.com/v1/forecast.json?key=1ff085c035ef4476806143524231106&q=${location}&aqi=no`
    )
    .then((res) => setstate(res.data));
};
