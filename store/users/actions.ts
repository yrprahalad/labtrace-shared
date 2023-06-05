import { Dispatch } from "redux";
import { User, UserLogin, UserRegister, SetMyUserDataForModify, CONFIGURE_USER_DATA, TOGGLE_MODIFY_USER_MODAL, ModalType, SetUserLogin, LoginResponse, SET_USER_LOGIN, ToggleConfigureUserModal, ToggleConfigureUserDataModal, TOGGLE_CONFIGURE_USER_DATA_MODAL, FetchTraceData, FETCH_USER_DATA, AddUsersToState, ADD_USERS_STATE } from "./types";
import { addUserViaIdApi, loginUserApi } from './apis'
import { setLoaderInfo } from "../loader/actions";
import { LoaderSeverityType } from "../loader/types";
import { apiErrorMessage } from "../../helpers/errors";
import { getUserDataApi } from "../api";
import { TraceData } from "../types";

export const loginUser = (userLogin: UserLogin): any => async function (dispatch: Dispatch) {
    try {
        await loginUserApi(userLogin).then(({ data }) => {
            const loginInfo: LoginResponse = data;
            dispatch(setUserLogin(loginInfo));
            dispatch(setLoaderInfo(LoaderSeverityType.SUCCESS, 'Logged in Successful', true));
            localStorage.setItem('id', loginInfo.id);
            localStorage.setItem('token', loginInfo.token);
        })
    } catch (error) {
        dispatch(setLoaderInfo(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
    }
};

const setUserLogin = (loginInfo: LoginResponse): SetUserLogin => {
    return {
        type: SET_USER_LOGIN,
        payload: loginInfo
    };
};

export const addUserViaId = (id: string, user: User, done?: () => void): any => async (dispatch: Dispatch) => {
    try {
        await addUserViaIdApi(id, user).then(({ data }) => {
            const registerInfo = data;
            dispatch(addUsersToState(false, user, undefined))
            dispatch(setLoaderInfo(LoaderSeverityType.SUCCESS, registerInfo, true));
            done && done();
        })
    } catch (error) {
        dispatch(setLoaderInfo(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
    }
};

export const toggleConfigureUserModal = (configureUserData: UserRegister, modalType: ModalType, isModalOpen: boolean): ToggleConfigureUserDataModal => {
    return {
        type: TOGGLE_CONFIGURE_USER_DATA_MODAL,
        configureUserData,
        modalType,
        isModalOpen
    }
}

export const getUserData = (id: string, done?: () => void): any => async (dispatch: Dispatch) => {
    try {
        await getUserDataApi(id).then(({ data }) => {
            dispatch(fetchUserData(data));
            done && done();
        })
    } catch (error) {
        dispatch(setLoaderInfo(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
    }
};


const fetchUserData = (traceData: TraceData): FetchTraceData => {
    return {
        type: FETCH_USER_DATA,
        payload: traceData
    }
}

const addUsersToState = (initialCall: boolean, user: User | undefined, users: Array<User> | undefined): AddUsersToState => {
    return {
        type: ADD_USERS_STATE,
        initialCall,
        user,
        users
    }
}