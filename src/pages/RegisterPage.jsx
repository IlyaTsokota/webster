import React from "react";
import RegisterForm from "components/form/Form";
import { useDispatch } from "react-redux";
import { setUser } from "store/userSlice";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import cookies from "cookies";

const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            .catch(console.error);
    };

    return <RegisterForm text="Register" handleSubmit={handleRegister} />;
};

export default RegisterPage;
