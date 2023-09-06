import { styled } from "styled-components";

export const Container = styled.div({
  width: "100%",
  height: "100vh",
  background: "#141216",
  overflowY: "scroll",
  overflowX: "hidden",
  scrollbarWidth: "10px",
  "&::-webkit-scrollbar": {
    width: "10px",
    background: "#161616",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#2f2f30",
    borderRadius: "10px",
  },
});

export const Column = styled.div({
  "@media(max-width: 700px)": {
    width: "100%",
  },
});

export const Block = styled.div({
  padding: "0 20px",
  width: "100%",
  paddingBottom: "30px",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  alignItems: "start",
});

export const NavbarDiv = styled.div({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "sticky",
  backdropFilter: "blur(20px)",
  top: "0",
  padding: "15px 45px",
  "@media(max-width: 700px)": {
    flexWrap: "wrap",
  },
});

export const InputDiv = styled.div({
  width: "400px",
  width: "60%",
  height: "100%",
  position: "relative",
  ".box": {
    position: "absolute",
    width: "100%",
    transform: "translateY(-20px)",
    input: {
      padding: "0 10px 0 40px",
      width: "100%",
      height: "40px",
      borderRadius: "32px",
      outline: "none",
      border: "0",
      background: "#1D1B1F",
      caretColor: "white",
      color: "white",
      fontSize: "13px",
    },
    svg: {
      position: "absolute",
      top: "13px",
      left: "2%",
      zIndex: "1",
      cursor: "pointer",
    },
    "@media(max-width: 700px)": {
      height: "fit-content",
      svg: {
        left: "6%",
      },
    },
  },
  "@media(max-width: 553px)": {
    width: "60%",
    justifyContent: "flex-start",
  },
});

export const ButtonDiv = styled.button({
  background: "#B6A1E5",
  border: "0",
  padding: "8px",
  borderRadius: "16px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  "@media(max-width: 700px)": {
    span: {
      display: "none",
    },
  },
});

export const WeatherBox = styled.div({
  borderRadius: "20px",
  width: "350px",
  background: "#1D1B1F",
  color: "#fff",
  margin: "20px 0 0 0",
  padding: "25px 30px",
  "@media(max-width: 700px)": {
    width: "100%",
  },
  "&.chances": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    ".card": {
      "@media(max-width: 360px)": {
        flexDirection: "column",
        gap: "15px",
      },
      margin: "10px 0 0 0",
      display: "flex",
      justifyContent: "space-between",
    },
  },
});

export const TodayBox = styled.div({
  borderRadius: "20px",
  width: "calc(100% - 370px)",
  background: "#1D1B1F",
  color: "#fff",
  margin: "20px 0 0 0",
  padding: "25px 30px",
  ".phrase": {
    marginTop: "15px",
  },
  ".boxes": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  "@media(max-width: 700px)": {
    width: "100%",
  },
  "&.chances": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    ".card": {
      "@media(max-width: 360px)": {
        flexDirection: "column",
        gap: "15px",
      },
      margin: "10px 0 0 0",
      display: "flex",
      justifyContent: "space-between",
    },
  },
});

export const Box = styled.div({
  display: "flex",
  alignItems: "center",
  background: "#272529",
  width: "49%",
  padding: "20px",
  borderRadius: "20px",
  margin: "15px 0",
  span: {
    marginLeft: "20px",
  },
  "@media(max-width: 700px)": {
    width: "100%",
  },
});

export const WeatherCard = styled.div({
  width: "48%",
  height: "100%",
  background: "#272529",
  borderRadius: "15px",
  padding: "6px 0 6px 0",
  "@media(max-width: 360px)": {
    width: "100%",
  },
  ".weahterChanceContent": {
    display: "flex",
    flexDirection: "column",
  },
  h2: {
    margin: "0 20px",
    whiteSpace: "nowrap",
  },
  h3: {
    margin: "0 10px",
  },
});

export const WeatherChances = styled.div({
  width: "100%",
  borderRadius: "3px",
  padding: "5px 15px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Line = styled.div({
  fontSize: (p) => p.size,
  display: "flex",
  alignItems: "center",
  gap: "5px",
  color: (p) => p.color,
  margin: "5px 0",
  img: {
    width: "100px",
  },
});

export const Hr = styled.div({
  height: "3px",
  background: "#29282b",
  margin: "15px 0",
  borderRadius: "50%",
});
