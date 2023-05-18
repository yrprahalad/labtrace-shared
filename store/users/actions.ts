import { Dispatch } from "redux";
import { FETCH_USER_INFO, FetchUserInfo, UserLogin, UserState, UserType } from "./types";
import { userLoginAPI } from './apis'
import { setLoaderInfo } from "../loader/actions";
import { LoaderSeverityType } from "../loader/types";
import { apiErrorMessage } from "../../helpers/errors";

export const userLogin = (userLogin: UserLogin): any => async function (dispatch: Dispatch) {
    try {
        const userData: any = await userLoginAPI(userLogin);
        let userState: UserState = { ...userData.data }
        dispatch(setLoaderInfo(LoaderSeverityType.SUCCESS, 'Logged in Successful', true));
        dispatch(fetchUserData(userState));
        if (userState.token) {
            localStorage.setItem('token', userState.token);
        };
    } catch (error: any) {
        dispatch(setLoaderInfo(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
    }
};


export const fetchUserData = (user: UserState): FetchUserInfo => {
    return {
        type: FETCH_USER_INFO,
        payload: user
    }
};
