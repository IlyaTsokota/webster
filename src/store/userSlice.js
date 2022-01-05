import { createSlice } from "@reduxjs/toolkit";
import cookies from "cookies";

const user = cookies.get("user");

const initialState = {
    email: (user && user.email) || null,
    token: (user && user.token) || null,
    id: (user && user.id) || null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, { payload }) {
            const { email, token, id } = payload;

            state.email = email;
            state.token = token;
            state.id = id;
        },
        removeUser(state) {
            state.email = null;
            state.token = null;
            state.id = null;
        },
    },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
