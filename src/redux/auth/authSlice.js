import { createSlice } from "@reduxjs/toolkit"
import { LogIn } from "./operations"

const initialState = {
    user: {
        name: "", 
        email: "",
    }, 
    token: "",
    isLoading: false, 
    isLoggedIn: false, 

}

const authSlice = createSlice({
        name: "auth", 
        initialState,
        extraReducers: (builder) => {
            builder.addCase(LogIn.fulfilled, (state, {payload}) => {
                state.isLoggedIn = true;
                state.user = {name: payload.name, email: payload.email};
            
            })
        }
    }
);

export const authReducers = authSlice.reducer;