import { Dispatch } from "redux";
import { User, UserLogin, UserRegister, SetMyUserDataForModify, CONFIGURE_USER_DATA, TOGGLE_MODIFY_USER_MODAL, ModalType, SetUserLogin, LoginResponse, SET_USER_LOGIN, ToggleConfigureUserModal, ToggleConfigureUserDataModal, TOGGLE_CONFIGURE_USER_DATA_MODAL } from "./types";
import { addUserViaIdApi, loginUserApi } from './apis'
import { setLoaderInfo } from "../loader/actions";
import { LoaderSeverityType } from "../loader/types";
import { apiErrorMessage } from "../../helpers/errors";

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

export const addUserViaId = (id: string, user: User): any => async (dispatch: Dispatch) => {
    try {
        await addUserViaIdApi(id, user).then(({ data }) => {
            const registerInfo = data;
            dispatch(setLoaderInfo(LoaderSeverityType.SUCCESS, registerInfo, true));
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