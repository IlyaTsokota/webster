import { TextField, Box, Button, Container } from "@mui/material";
import React, { useState } from "react";

const Form = ({ text, handleSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const onChangeEmail = (e) => {
        const field = e.target.value.trim();

        setEmail(field);

        if (field.length === 0) {
            setEmailError("Field required");
        } else if (
            !field.match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        ) {
            setEmailError("Invalid email!");
        } else {
            setEmailError("");
        }
    };

    const onChangePassword = (e) => {
        const field = e.target.value.trim();

        setPassword(field);

        if (field.length === 0) {
            setPasswordError("Field required");
        } else if (!field.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)) {
            setPasswordError(
                "Password must be minimum eight characters, at least one letter and one number!"
            );
        } else {
            setPasswordError("");
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (email && password && !emailError && !passwordError) {
            handleSubmit(email, password);
        }
    };

    return (
        <Container>
            <Box
                component="form"
                sx={{
                    maxWidth: "550px",
                    width: "100%",
                    margin: "25px auto 0",
                    paddingTop: "80px",
                    "& .MuiTextField-root": {
                        mt: 1,
                    },
                }}
                autoComplete="off"
                onSubmit={onSubmit}
            >
                <div>
                    <TextField
                        required
                        error={!!emailError}
                        label="Email"
                        value={email}
                        type="email"
                        name="email"
                        fullWidth
                        helperText={emailError}
                        onInput={onChangeEmail}
                        onFocus={onChangeEmail}
                    />
                </div>
                <div>
                    <TextField
                        required
                        error={!!passwordError}
                        label="Password"
                        type="password"
                        value={password}
                        fullWidth
                        helperText={passwordError}
                        name="password"
                        onInput={onChangePassword}
                        onFocus={onChangePassword}
                    />
                </div>
                <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    sx={{
                        mt: 1,
                    }}
                >
                    {text}
                </Button>
            </Box>
        </Container>
    );
};

export default Form;
