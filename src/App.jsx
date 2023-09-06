import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import WeatherNow from "./components/WeatherNow";
import { Block, Column, Container } from "./style/ui/styled";
import { getWeather } from "./utils";
import Forecast from "./components/ChansesTo";
import Today from "./components/Today";

export default function App() {
  const [state, setstate] = useState({});
  const [search, setsearch] = useState("Uzbekistan");

  useEffect(() => {
    getWeather(search, setstate);
  }, [search]);

  return (
    <Container>
      <Navbar search={search} setsearch={setsearch} data={state} />
      <Block>
        <Column>
          <WeatherNow data={state} />
          <Forecast data={state} />
        </Column>
        <Today data={state} />
      </Block>
    </Container>
  );
}
