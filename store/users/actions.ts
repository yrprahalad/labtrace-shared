import { Dispatch } from "redux";
import { FETCH_CURRENT_USER_INFO, FetchCurrentUserInfo, IUser, UserLogin, UserRegister, FetchUsersForAdmin, FETCH_USERS_FOR_ADMIN } from "./types";
import { userLoginAPI, userRegisterAPI } from './apis'
import { setLoaderInfo } from "../loader/actions";
import { LoaderSeverityType } from "../loader/types";
import { apiErrorMessage } from "../../helpers/errors";

export const userLogin = (userLogin: UserLogin): any => async function (dispatch: Dispatch) {
    try {
        const userData: any = await userLoginAPI(userLogin);
        let user: IUser = { ...userData.data }
        dispatch(setLoaderInfo(LoaderSeverityType.SUCCESS, 'Logged in Successful', true));
        dispatch(setCurrentUserLoginData(user));
        if (user.token) {
            localStorage.setItem('token', user.token);
        };
    } catch (error: any) {
        dispatch(setLoaderInfo(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
    }
};


export const setCurrentUserLoginData = (user: IUser): FetchCurrentUserInfo => {
    return {
        type: FETCH_CURRENT_USER_INFO,
        payload: user,
    };
};

export const userRegister = (userRegister: UserRegister): any => async function (dispatch: Dispatch) {
    try {
        const userData: any = await userRegisterAPI(userRegister);
        let user: IUser = { ...userData.data }
        dispatch(setLoaderInfo(LoaderSeverityType.SUCCESS, `${user.username} registered Successfully`, true));
        // dispatch(setCurrentUserLoginData(user, false));
    } catch (error: any) {
        dispatch(setLoaderInfo(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
    }
};

export const setUsersForAdmin = (user: IUser, initialCall: boolean): FetchUsersForAdmin => {
    return {
        type: FETCH_USERS_FOR_ADMIN,
        payload: user,
        initialCall
    }
}