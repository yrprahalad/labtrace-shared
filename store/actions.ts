import { ILogoutWithClearState, LOGOUT_WITH_CLEAR_STATE } from "./types";

export const logoutWithClearState = (): ILogoutWithClearState => {
    return {
        type: LOGOUT_WITH_CLEAR_STATE,
    };
};