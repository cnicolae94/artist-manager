import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ToastProvider } from "./contexts/toast-context";
import { ArtistProvider } from "./contexts/artists-context";
import { ModalPopUpProvider } from "./contexts/modal-context";
import { CurrentArtistProvider } from "./contexts/currentartist-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <ArtistProvider>
          <CurrentArtistProvider>
            <ModalPopUpProvider>
              <App />
            </ModalPopUpProvider>
          </CurrentArtistProvider>
        </ArtistProvider>
      </ToastProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
