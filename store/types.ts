import { LoaderState } from "./loader/types";
import { UserState } from "./users/types";

export enum LearnEntityEnum {
    USERS = 'Users',
    USER_ROLES = 'User Roles',
    ACCOUNTS = 'Accounts',
    TANKS = 'Tanks',
    PROCESS = 'Process',
    SPECS = 'Specs',
    PARTS = 'Parts',
    SYSTEM_LICENSE = 'System License',
};

export interface ApplicationState {
    tank: UserState,
    loader: LoaderState
};

export const LOGOUT_WITH_CLEAR_STATE = "LOGOUT_WITH_CLEAR_STATE";

export interface ILogoutWithClearState {
    type: typeof LOGOUT_WITH_CLEAR_STATE
};

export type RootActionTypes = ILogoutWithClearState;