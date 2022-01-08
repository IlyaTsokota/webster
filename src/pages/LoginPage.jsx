import React, { useState } from "react";
import LoginForm from "components/form/Form";
import { useDispatch } from "react-redux";
import { setUser } from "store/userSlice";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import cookies from "cookies";
import { Snackbar, Alert } from "@mui/material";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(false);

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
            .catch(() => setError(true));
    };

    return (
        <>
            {error && (
                <Snackbar open autoHideDuration={6000}>
                    <Alert
                        onClose={() => setError(false)}
                        severity="error"
                        sx={{ width: "100%" }}
                    >
                        Invalid login or password!
                    </Alert>
                </Snackbar>
            )}
            <LoginForm text="Login" handleSubmit={handleLogin} />
        </>
    );
};

export default LoginPage;
