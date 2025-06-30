// File: src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router";
import "./assets/styles.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <Header /> */}
    <AppRouter />
    <Footer />
  </React.StrictMode>
);
