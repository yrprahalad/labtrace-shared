import axios from "axios";
import { Dispatch } from "redux";
import { apiErrorMessage } from "../../helpers/errors";
import { setLoader } from "../loader/actions";
import { LoaderSeverityType } from "../loader/types";
import { BASE_URL } from "../urls";
import { Login, ModalType, SET_MY_USER_DATA, SetMyUserData, TOGGLE_USER_MODAL, ToggleUserModal, UPDATE_USER, UpdateUser, User } from "./types";

const updateUsers = (user: User): UpdateUser => {
    return {
        type: UPDATE_USER,
        user
    }
};

const setMyUserData = (myData: User): SetMyUserData => {
    return {
        type: SET_MY_USER_DATA,
        myData
    }
}

export const toggleUserModal = (user: User, modalType: ModalType, isOpen: boolean): ToggleUserModal => {
    return {
        type: TOGGLE_USER_MODAL,
        user,
        modalType,
        isOpen
    };
};

export const loginUser = (payload: Login): any => {
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.post(BASE_URL + 'auth/login', payload);
            const { token, id, myData } = response.data;
            localStorage.setItem('id', id);
            localStorage.setItem('token', token);
            dispatch(setMyUserData(myData))
            dispatch(setLoader(LoaderSeverityType.SUCCESS, 'Logged in Successful', true));

        } catch (error) {
            dispatch(setLoader(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
        };
    };
};

export const addUser = (payload: User): any => {
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    };
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.post(BASE_URL + 'add', payload, { headers });
            const user: User = response.data;
            dispatch(updateUsers(user));
            dispatch(setLoader(LoaderSeverityType.SUCCESS, 'User added Successful', true));
        } catch (error) {
            dispatch(setLoader(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
        };
    };
};

export const updateUser = (payload: User) => {
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    };
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.post(BASE_URL + 'update', payload, { headers });
            const user: User = response.data;
            dispatch(updateUsers(user));
            dispatch(setLoader(LoaderSeverityType.SUCCESS, 'User updated Successful', true));
        } catch (error) {
            dispatch(setLoader(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
        };
    };
};