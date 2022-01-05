import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./firebase";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <StyledEngineProvider injectFirst>
                <CssBaseline />
                <App />
            </StyledEngineProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
