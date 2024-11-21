import ReactDOM from "react-dom/client";
import React from "react";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />); //JSX code to render...
//ReactDOM.createRoot(entryPoint).render(React.createElement(App)); //Non-JSX code to render...
