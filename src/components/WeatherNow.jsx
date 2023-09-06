import React from "react";
import { Hr, Line, WeatherBox } from "../style/ui/styled";
import * as Icons from "../icons/Icon";
import moment from "moment/moment";

export default function WeatherNow({ data }) {
  return (
    <WeatherBox>
      <Line size={"22px"}>Now</Line>
      <Line size={"70px"}>
        {data?.current?.temp_c}℃
        <img src={data?.current?.condition.icon} />
      </Line>
      <Line size={"20px"}>{data?.current?.condition.text}</Line>
      <Hr />
      <Line size={"18px"} color="gray">
        <Icons.date />
        {moment(data?.location?.localtime).format("ll")}
      </Line>
      <Line size={"18px"} color="gray">
        <Icons.navigation />
        {data?.location?.country + "," + data?.location?.region}
      </Line>
    </WeatherBox>
  );
}
