import "./App.scss";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../header";
import { HomePage, LoginPage, RegisterPage } from "../../pages";

const App = (props) => {
    return (
        <div className="app">
            <Header {...props} />
            <Routes>
                <Route exec path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route
                    path="*"
                    element={
                        <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                        </main>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
