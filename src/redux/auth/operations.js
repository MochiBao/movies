import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit"
import axios from "axios"

axios.defaults.baseURL="https://667157cde083e62ee43b293f.mockapi.io/api/v1/"

const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization=`Bearer ${token}`
}

export const LogIn = createAsyncThunk(
    "auth/logIn",
    async (user, thunkAPI) => {
        try {
            const {data} = await axios.post("users", user)
            setAuthHeader(data.token)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message)
        }
    }
)

