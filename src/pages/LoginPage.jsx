import React from "react";
import LoginForm from "components/form/Form";
import { useDispatch } from "react-redux";

const LoginPage = () => {
    const dispatch = useDispatch();

    const handleLogin = () => {};

    return <LoginForm text="Login" />;
};

export default LoginPage;
