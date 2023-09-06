import React from "react";
import { Box, Hr, TodayBox } from "../style/ui/styled";
import * as Icons from "../icons/Icon";

export default function Today({ data }) {
  return (
    <TodayBox>
      <h1>Today</h1>
      <div className="boxes">
        <Box>
          <Icons.sunrise />
          <span>
            <h3>Sun Rise</h3>
            {data.forecast?.forecastday[0].astro.sunrise}
          </span>
        </Box>
        <Box>
          <Icons.sunset />
          <span>
            <h3>Sun Set</h3>
            {data.forecast?.forecastday[0].astro.sunset}
          </span>
        </Box>
        <Box>
          <Icons.simplemoon />
          <span>
            <h3>Moon Rise</h3>
            {data.forecast?.forecastday[0].astro.moonrise}
          </span>
        </Box>
        <Box>
          <Icons.simplemoon />
          <span>
            <h3>Moon Set</h3>
            {data.forecast?.forecastday[0].astro.moonset}
          </span>
        </Box>
      </div>
      <Hr />
      <h3 className="phrase">
        Moon Phase - {data.forecast?.forecastday[0].astro.moon_phase}
      </h3>
    </TodayBox>
  );
}
