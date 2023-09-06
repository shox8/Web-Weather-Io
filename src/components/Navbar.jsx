import React from "react";
import { ButtonDiv, InputDiv, NavbarDiv } from "../style/ui/styled";
import * as Icons from "../icons/Icon";
import ReactSearchBox from "react-search-box";
import { Country } from "country-state-city";
import axios from "axios";

export default function Navbar({ data, search, setsearch }) {
  function maintainLocation() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`
        )
        .then((data) => setsearch(data.data.address.city));
    });
  }

  return (
    <NavbarDiv>
      {data.forecast?.forecastday[0].astro.is_sun_up > 1 ? (
        <Icons.sun />
      ) : (
        <Icons.moon />
      )}
      <InputDiv>
        <div className="box">
          <Icons.search_icon color={"white"} />
          <ReactSearchBox
            placeholder="Search City..."
            value={search}
            data={Country.getAllCountries().map((item) => ({
              key: item.name,
              value: item.name,
            }))}
            onSelect={(e) => setsearch(e.item.value)}
          />
        </div>
      </InputDiv>
      <ButtonDiv onClick={maintainLocation}>
        <Icons.location color={"white"} />
        <span>Currenct Location</span>
      </ButtonDiv>
    </NavbarDiv>
  );
}
