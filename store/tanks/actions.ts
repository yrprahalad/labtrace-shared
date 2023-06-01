import { Dispatch } from "redux";
import { ADD_TANK_INFO, AddTankInfo, Tank, SetTankDataForModify, SET_TANK_DATA_FOR_MODIFY, ToggleModifyTankModal, TOGGLE_MODIFY_TANK_MODAL } from "./types";
import { addTankApi } from './apis'
import { setLoaderInfo } from "../loader/actions";
import { LoaderSeverityType } from "../loader/types";
import { apiErrorMessage } from "../../helpers/errors";


export const addTankInfo = (tank: Tank): AddTankInfo => {
    return {
        type: ADD_TANK_INFO,
        payload: tank,
    };
};

export const addTank = (userId: string, tank: Tank) : any =>async (dispatch:Dispatch) => {
    try{
        await addTankApi(userId, tank).then(({data})=>{
            const tankData: Tank = data;
            dispatch(addTankInfo(tankData))
        })
    }catch {
        dispatch(setLoaderInfo(LoaderSeverityType.ERROR, "Failed To Add Tanks", true))
    }
};