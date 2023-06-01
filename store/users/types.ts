export interface UserState {
    currentLoggedInUser: IUser,
    users: Array<IUser>,
    modifyTank: {
        tankData : UserRegister,
        isModifyModalOpen: boolean
    }
};

export interface IUser extends UserRegister {
    _id: string,
    token?: string | undefined,
}

export interface UserRegister {
    username: string,
    password: string,
    firstname: string | undefined,
    lastname: string | undefined,
    email: string | undefined,
    employeeNumber: string | undefined,
    description: string | undefined,
    isActive: boolean | undefined,
    hourlyChargingRate: number | undefined,
    jobTitle: string | undefined,
    adminID: string | undefined,
    userType: UserType,
    roles: Array<[]> | undefined,
    shiftPattern: ShiftPattern | undefined,
};

export interface UserLogin {
    username: string,
    password: string,
    userType: UserType,
};

export enum UserType {
    ADMIN = 'Admin',
    USER = 'User',
    SUPERADMIN = 'Super User'
};

export interface ShiftPattern {
    from: string | Date,
    to: string | Date,
    descripton: string
};

export const FETCH_CURRENT_USER_INFO = 'FETCH_CURRENT_USER_INFO';
export const FETCH_USERS_FOR_ADMIN = 'FETCH_USERS_FOR_ADMIN';
export const SET_USER_DATA_FOR_MODIFY = 'SET_USER_DATA_FOR_MODIFY';
export const TOGGLE_MODIFY_USER_MODAL = 'TOGGLE_MODIFY_USER_MODAL';
export interface FetchCurrentUserInfo {
    type: typeof FETCH_CURRENT_USER_INFO,
    payload: IUser,
};

export interface FetchUsersForAdmin {
    type: typeof FETCH_USERS_FOR_ADMIN,
    payload: Array<IUser>,
    initialCall: boolean
};

export interface SetUserDataForModify {
    type : typeof SET_USER_DATA_FOR_MODIFY,
    payload: UserRegister
};

export interface ToggleModifyUserModal {
    type: typeof TOGGLE_MODIFY_USER_MODAL,
    payload: boolean
}


export type UserActionTypes = FetchCurrentUserInfo | FetchUsersForAdmin | SetUserDataForModify | ToggleModifyUserModal;