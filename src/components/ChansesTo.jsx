import { WeatherBox, WeatherCard, WeatherChances } from "../style/ui/styled";
import * as Icons from "../icons/Icon";

export default function Forecast({ data }) {
  return (
    <WeatherBox className="chances">
      <h2>Chances</h2>
      <div className="card">
        <WeatherCard>
          <h2>Today</h2>
          <div className="weahterChanceContent">
            <WeatherChances>
              <Icons.rain />
              <h3>{data?.forecast?.forecastday[0].day.daily_chance_of_rain}%</h3>
            </WeatherChances>
            <WeatherChances>
              <Icons.snow />
              <h3>{data?.forecast?.forecastday[0].day.daily_chance_of_snow}%</h3>
            </WeatherChances>
          </div>
        </WeatherCard>
        <WeatherCard>
          <h2>In Days</h2>
          <div className="weahterChanceContent">
            <WeatherChances>
              <Icons.rain />
              <h3>{data?.forecast?.forecastday[0].day.daily_chance_of_rain}%</h3>
            </WeatherChances>
            <WeatherChances>
              <Icons.snow />
              <h3>{data?.forecast?.forecastday[0].day.daily_chance_of_snow}%</h3>
            </WeatherChances>
          </div>
        </WeatherCard>
      </div>
    </WeatherBox>
  );
}
