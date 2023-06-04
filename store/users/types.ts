
export interface UserState {
    loggedInInfo: {
        token: string | undefined,
        id: string | undefined
    }
    users: Array<User>,
    myData: User | undefined,
    configureUser: {
        userData: UserRegister,
        isConfigureModalOpen: boolean,
        modalType: ModalType
    }
};

export const SET_USER_LOGIN = "SET_USER_LOGIN";
export const TOGGLE_MODIFY_USER_MODAL = 'TOGGLE_MODIFY_USER_MODAL';
export const CONFIGURE_USER_DATA = 'CONFIGURE_USER_DATA';
export const TOGGLE_CONFIGURE_USER_DATA_MODAL = 'TOGGLE_CONFIGURE_USER_DATA_MODAL';


export interface User {
    _id?: string
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    employeeNumber: string,
    description: string,
    isActive: boolean,
    hourlyChargingRate: string,
    jobTitle: string,
    userType: UserType,
    roles: Array<[]>,
    password: string
    shiftPattern: ShiftPattern | undefined,
    traceId: string
};

export enum ModalType {
    EDIT = 'edit',
    REGISTER = 'register',
    VIEW = 'view'
};

export interface UserRegister extends User {
    password: string,
    confirmPassword: string
};

export enum UserType {
    ADMIN = 'Admin',
    USER = 'User',
    SUPERADMIN = 'Super User'
};

export interface UserLogin {
    username: string,
    password: string,
    userType: UserType,
};

export interface LoginResponse {
    token: string,
    id: string
}

export interface ShiftPattern {
    from: string | Date,
    to: string | Date,
    descripton: string
};

export interface ToggleConfigureUserModal {
    type: typeof TOGGLE_MODIFY_USER_MODAL,
    modalType: ModalType,
    isConfigureModalOpen: boolean
}

export interface SetUserLogin {
    type: typeof SET_USER_LOGIN,
    payload: LoginResponse
}
export interface SetMyUserDataForModify {
    type: typeof CONFIGURE_USER_DATA,
    payload: UserRegister
};

export interface ToggleConfigureUserDataModal {
    type : typeof TOGGLE_CONFIGURE_USER_DATA_MODAL,
    configureUserData: UserRegister,
    isModalOpen: boolean,
    modalType: ModalType
}

export type UserActionTypes = SetMyUserDataForModify | ToggleConfigureUserModal | SetUserLogin | ToggleConfigureUserDataModal;
