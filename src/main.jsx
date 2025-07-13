import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import initI18n from "./i18n";
import "@/assets/styles/index.css";
import "@/assets/styles/home.css";

// Initialize i18n before rendering the app
const initializeApp = async () => {
  await initI18n();

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

initializeApp();
