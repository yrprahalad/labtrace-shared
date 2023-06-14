import axios from "axios";
import { Dispatch } from "redux";
import { apiErrorMessage } from "../../helpers/errors";
import { setLoader } from "../loader/actions";
import { LoaderSeverityType } from "../loader/types";
import { BASE_URL } from "../urls";
import { SET_TANKS, SetTanks, TOGGLE_TANK_MODAL, Tank, ToggleTankModal, UPDATE_TANK, UpdateTank } from "./types";
import { ModalType } from "../users/types";



const updateTanks = (tank: Tank): UpdateTank => {
    return {
        type: UPDATE_TANK,
        tank
    }
};

const setTanks = (tanks: Array<Tank>): SetTanks => {
    return {
        type: SET_TANKS,
        tanks
    }
}

export const toggleTankModal = (tank: Tank, modalType: ModalType, isOpen: boolean): ToggleTankModal => {
    return {
        type: TOGGLE_TANK_MODAL,
        tank,
        modalType,
        isOpen
    };
};

export const getTanks = (id: string): any => {
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    };
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.get(BASE_URL + `tanks/${id}`, { headers });
            const tank: Array<Tank> = response.data;
            dispatch(setTanks(tank));
            dispatch(setLoader(LoaderSeverityType.SUCCESS, 'Fetched All Tanks', true));
        } catch (error) {
            dispatch(setLoader(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
        };
    };
}

export const addTank = (payload: Tank, done?: () => void): any => {
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    };
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.post(BASE_URL + 'tanks/add', payload, { headers });
            const tank: Tank = response.data;
            dispatch(updateTanks(tank));
            dispatch(setLoader(LoaderSeverityType.SUCCESS, 'Tank added Successful', true));
            done && done()
        } catch (error) {
            dispatch(setLoader(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
        };
    };
};

export const updateTank = (payload: Tank, done?: () => void): any => {
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    };
    return async (dispatch: Dispatch) => {
        try {
            const response = await axios.put(BASE_URL + 'tanks/update', payload, { headers });
            const tank: Tank = response.data;
            dispatch(updateTank(tank));
            dispatch(setLoader(LoaderSeverityType.SUCCESS, 'Tank updated Successful', true));
            done && done();
        } catch (error) {
            dispatch(setLoader(LoaderSeverityType.ERROR, apiErrorMessage(error), true));
        };
    };
};