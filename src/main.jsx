import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Language } from "./Context/UseLanguagContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Language>
      <App />
    </Language>
  </React.StrictMode>
);
