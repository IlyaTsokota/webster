import React from "react";
import LoginForm from "components/form/Form";
import { useDispatch } from "react-redux";
import { setUser } from "store/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import cookies from "cookies";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(({ user }) => {
                const objUser = {
                    email: user.email,
                    id: user.uid,
                    token: user.accessToken,
                };

                cookies.set("user", objUser);
                dispatch(setUser(objUser));
                navigate("/");
            })
            .catch(console.error);
    };

    return <LoginForm text="Login" handleSubmit={handleLogin} />;
};

export default LoginPage;
