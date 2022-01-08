import React, { useState } from "react";
import RegisterForm from "components/form/Form";
import { useDispatch } from "react-redux";
import { setUser } from "store/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import cookies from "cookies";
import { Snackbar, Alert } from "@mui/material";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [error, setError] = useState(false);

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
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
            <RegisterForm text="Register" handleSubmit={handleRegister} />
        </>
    );
};

export default RegisterPage;
