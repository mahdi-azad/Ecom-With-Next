import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

export const doLogin = createAsyncThunk(
    "auth/login",
    async(data, thunkAPI) => {
        try {
            return await authService.login(data)
        } catch (error) {
            console.log('error', error)
            // return thunkAPI.rejectWithValue(error);
        }
    }
)