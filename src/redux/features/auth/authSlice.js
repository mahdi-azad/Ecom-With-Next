import {createSlice} from "@reduxjs/toolkit";
import { doLogin } from "./authAsyncActions";

const initialState = {
    isAuthenticated: false,
    token: null,
    isSuccess: false,
    isLoading: false,
    isError: false,
    message: ""
}
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        reset: (state) => {
            state.isAuthenticated = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.isError = false;
            state.message = "";
        },
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload; 
        }
    },
    extraReducers: (builder) => {
        builder 
        .addCase(doLogin.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(doLogin.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isAuthenticated = true;
            state.isSuccess = true;
            state.message = "User Logged In Successfully";
            state.token = action.payload.token
        })
        .addCase(doLogin.rejected, (state) => {
            state.isLoading = false;
            state.isAuthenticated = false;
            state.isSuccess = false;
            state.message = "User Login Failed"
            state.isError = true;
        })
    }
})

export const { reset, setAuthenticated } = authSlice.actions
export default authSlice.reducer