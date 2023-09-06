import ReactDom from "react-dom/client";
import App from "./App";
import "./style/css/globalStyles.css";

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<App />)