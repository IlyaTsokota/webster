import { TextField, Box, Button } from "@mui/material";
import React, { useState } from "react";

const Form = ({ text, handleSubmit }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <Box
            component="form"
            sx={{
                maxWidth: "550px",
                width: "100%",
                margin: "25px auto 0",
                "& .MuiTextField-root": {
                    m: 1,
                    width: "100%",
                },
            }}
            autoComplete="off"
            onSubmit={(e) => handleSubmit(e.currentTarget)}
        >
            <div>
                <TextField
                    required
                    id="outlined-error"
                    label="Email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value.trim())}
                />
            </div>
            <div>
                <TextField
                    required
                    id="outlined-error"
                    label="Password"
                    value={password}
                    name="password"
                    onChange={(e) => setPassword(e.target.value.trim())}
                />
            </div>
            <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{
                    m: 1,
                }}
            >
                {text}
            </Button>
        </Box>
    );
};

export default Form;
