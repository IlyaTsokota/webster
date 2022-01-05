import { Box, Button, Typography, Grid, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { useAuth } from "hooks/use-auth";
import Editor from "components/editor/Editor";

const HomePage = () => {
    const navigate = useNavigate();
    const { isAuth } = useAuth();

    if (isAuth) {
        return <Editor />;
    }

    return (
        <Container maxWidth="xl">
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    paddingTop: "80px",
                    minHeight: "calc(100vh - 80px)",
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
                    <Typography variant="h2" fontSize={34}>
                        Live your fantasies with a graphics editor
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            mb: 2,
                        }}
                        fontSize={40}
                        fontWeight={700}
                    >
                        Autobots Editor
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={() => navigate("/login")}
                    >
                        Start Edit
                    </Button>
                </Box>
            </Grid>
        </Container>
    );
};

export default HomePage;
