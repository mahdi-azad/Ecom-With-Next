// verify user

import { createAsyncThunk } from "@reduxjs/toolkit";
import userService from "./userService";

export const verifyUser = createAsyncThunk(
    "user/verify", 
    async(data, thunkAPI) => {
    try {
        return await userService.verifyUser();
    } catch (error) {
        const message = (error?.response && error?.response?.data && error?.response?.data.errors.message) || "Error occured fetching the user info"
    }
});