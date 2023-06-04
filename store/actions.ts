import { Dispatch } from "redux";
import { ILogoutWithClearState, LOGOUT_WITH_CLEAR_STATE } from "./types";

export const logoutWithClearState = (): ILogoutWithClearState => {
    return {
        type: LOGOUT_WITH_CLEAR_STATE,
    };
}


export const getTraceData = (id: string) => async (dispatch: Dispatch) => {
    
};