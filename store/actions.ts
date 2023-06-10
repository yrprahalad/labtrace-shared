import { Dispatch } from "redux";
import { ILogoutWithClearState, LOGOUT_WITH_CLEAR_STATE, TraceData } from "./types";
import { apiErrorMessage } from "../helpers/errors";
import { setLoader } from "./loader/actions";
import { LoaderSeverityType } from "./loader/types";

export const logoutWithClearState = (): ILogoutWithClearState => {
    return {
        type: LOGOUT_WITH_CLEAR_STATE,
    };
}

