import { combineReducers } from "@reduxjs/toolkit";
import { ApplicationState } from "./types";
import { usersReducer } from "./users/reducer";
import { loaderReducer } from "./loader/reducer";

const appReducer = combineReducers<ApplicationState>({
    user: usersReducer,
    loader: loaderReducer,
});

export default appReducer;
