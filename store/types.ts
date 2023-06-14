import { LoaderState } from "./loader/types";
import { TankState } from "./tanks/types";
import { ShiftPattern, User, UserState } from "./users/types";

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
    user: UserState
    tank: TankState
    loader: LoaderState
};

export interface TraceData {
    myData: User,
    users: Array<User>
    tanks: undefined
}

export enum ModalType {
    EDIT = 'edit',
    REGISTER = 'register',
    VIEW = 'view',
    ADD = 'add'
};


export const LOGOUT_WITH_CLEAR_STATE = "LOGOUT_WITH_CLEAR_STATE";

export interface ILogoutWithClearState {
    type: typeof LOGOUT_WITH_CLEAR_STATE
};


export type RootActionTypes = ILogoutWithClearState;
