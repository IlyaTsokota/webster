import { Box, Button, Typography, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
                minHeight: "80vh",
            }}
        >
            <Box
                component="div"
                sx={{
                    p: 2,
                    textAlign: "center",
                    maxWidth: "650px",
                    margin: "0 auto",
                }}
            >
                <Typography
                    variant="h1"
                    fontSize={34}
                    sx={{
                        mb: 2,
                    }}
                >
                    Live your fantasies with a graphics editor
                    <Typography variant="h1" fontSize={40} fontWeight={700}>
                        Autobots Editor
                    </Typography>
                </Typography>
                <Button variant="contained" onClick={() => navigate("/login")}>
                    Start Edit
                </Button>
            </Box>
        </Grid>
    );
};

export default HomePage;
