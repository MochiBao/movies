import { configureStore,  } from "@reduxjs/toolkit";
import { authReducers } from "./auth/authSlice";

export const store = configureStore({
    reducer: authReducers
}
    
)