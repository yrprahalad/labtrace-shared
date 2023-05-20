import { Dispatch } from "redux";
import { FETCH_CURRENT_USER_INFO, FetchCurrentUserInfo, IUser, UserLogin, UserRegister, FetchUsersForAdmin, FETCH_USERS_FOR_ADMIN } from "./types";
import { getAllUsersForAdminAPI, userLoginAPI, userRegisterAPI } from './apis'
import { setLoaderInfo } from "../loader/actions";
import { LoaderSeverityType } from "../loader/types";
import { apiErrorMessage } from "../../helpers/errors";

export const userLogin = (userLogin: UserLogin): any => async function (dispatch: Dispatch) {
    try {
        const userData: any = await userLoginAPI(userLogin);
        let user: IUser = userData.data
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
        await userRegisterAPI(userRegister);
        dispatch(setLoaderInfo(LoaderSeverityType.SUCCESS, `${userRegister.username} registered Successfully`, true));
        try {
            if (userRegister.adminID) {
                const usersResponse = await getAllUsersForAdminAPI(userRegister.adminID);
                let users: Array<IUser> = usersResponse.data;
                console.log(users)
            }
        } catch (error: any) {
            dispatch(setLoaderInfo(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
        }
    } catch (error: any) {
        dispatch(setLoaderInfo(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
    }
};

export const setUsersForAdmin = (user: Array<IUser>, initialCall: boolean): FetchUsersForAdmin => {
    return {
        type: FETCH_USERS_FOR_ADMIN,
        payload: user,
        initialCall
    }
};

export const getAllUsersForAdmin = (adminID: string): any => async function (dispatch: Dispatch) {
    try {
        const usersResponse = await getAllUsersForAdminAPI(adminID);
        dispatch(setLoaderInfo(LoaderSeverityType.SUCCESS, `Fetched User's`, true));
        let users: Array<IUser> = usersResponse.data;
        dispatch(setUsersForAdmin(users, true))
    } catch (error: any) {
        console.log(error)
        dispatch(setLoaderInfo(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
    }
}