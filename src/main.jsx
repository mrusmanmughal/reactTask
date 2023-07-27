import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Language } from "./Context/UseLanguagContext.jsx";
import { AuthProvider } from "./Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Language>
        <App />
      </Language>
    </AuthProvider>
  </React.StrictMode>
);
