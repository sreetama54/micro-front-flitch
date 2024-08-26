import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./styles.css";
import Home from "./Home";

const App = () => (
  <div className="container">
    <div><Home/></div>
  </div>
);
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App />)