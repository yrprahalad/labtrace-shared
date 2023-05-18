import { LoaderState } from "./loader/types";
import { UserState } from "./users/types";

export interface ApplicationState {
    userInfo: UserState,
    loader: LoaderState
};

export const LOGOUT_WITH_CLEAR_STATE = "LOGOUT_WITH_CLEAR_STATE";

export interface ILogoutWithClearState {
    type: typeof LOGOUT_WITH_CLEAR_STATE
};

export type RootActionTypes = ILogoutWithClearState;