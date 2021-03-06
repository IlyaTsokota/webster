import React from "react";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "hooks/use-auth";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useDispatch } from "react-redux";
import { removeUser } from "store/userSlice";
import { useNavigate } from "react-router-dom";
import cookies from "cookies";

function HideOnScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const pages = [
    {
        name: "Sign In",
        path: "/login",
        isAuth: false,
    },
    {
        name: "Sign Up",
        path: "/register",
        isAuth: false,
    },
];

const Header = (props) => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const user = useAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
        setAnchorElUser(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <HideOnScroll {...props}>
            <AppBar sx={{ height: "64px" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                        >
                            <Link
                                style={{
                                    display: "block",
                                    textDecoration: "none",
                                    color: "#fff",
                                }}
                                to="/"
                            >
                                Autobots Editor
                            </Link>
                        </Typography>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                {pages.map(({ name, path, isAuth }) => {
                                    return isAuth === user.isAuth ? (
                                        <NavLink
                                            to={path}
                                            key={name}
                                            onClick={handleCloseNavMenu}
                                            style={({ isActive }) => {
                                                return {
                                                    display: "block",
                                                    margin: "0 1rem",
                                                    textDecoration: "none",
                                                    color: isActive
                                                        ? "#000"
                                                        : "#cccccc",
                                                };
                                            }}
                                        >
                                            {name}
                                        </NavLink>
                                    ) : null;
                                })}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{
                                flexGrow: 1,
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            <Link
                                style={{
                                    display: "block",
                                    textDecoration: "none",
                                    color: "#fff",
                                }}
                                to="/"
                            >
                                Autobots Editor
                            </Link>
                        </Typography>
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {pages.map(({ name, path, isAuth }) => {
                                return isAuth === user.isAuth ? (
                                    <NavLink
                                        to={path}
                                        key={name}
                                        onClick={handleCloseNavMenu}
                                        style={({ isActive }) => {
                                            return {
                                                display: "block",
                                                margin: "0 1rem",
                                                textDecoration: "none",
                                                color: isActive
                                                    ? "#000"
                                                    : "#fff",
                                            };
                                        }}
                                    >
                                        {name}
                                    </NavLink>
                                ) : null;
                            })}
                        </Box>

                        {user.isAuth && (
                            <>
                                <Box sx={{ flexGrow: 0, mr: 2 }}>
                                    <Typography>{user.email}</Typography>
                                </Box>
                                <Box sx={{ flexGrow: 0 }}>
                                    <Tooltip title="Open settings">
                                        <IconButton
                                            onClick={handleOpenUserMenu}
                                            sx={{ p: 0 }}
                                        >
                                            <MoreVertIcon />
                                        </IconButton>
                                    </Tooltip>
                                    <Menu
                                        sx={{ mt: "45px" }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        <MenuItem
                                            onClick={() => {
                                                handleCloseNavMenu();
                                                handleCloseUserMenu();
                                                cookies.remove("user");
                                                dispatch(removeUser());
                                                navigate("/");
                                            }}
                                        >
                                            <Typography textAlign="center">
                                                Logout
                                            </Typography>
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            </>
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
};

export default Header;
