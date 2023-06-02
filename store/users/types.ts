
export interface UserState {
    loginInfo: {
        token: string | undefined,
        id: string | undefined
    }
    users: Array<User>,
    myData: User | undefined,
    modifyUser: {
        userData: UserRegister | undefined,
        isModifyModalOpen: boolean,
        modalType: ModalType
    }
};

export const SET_USER_LOGIN = "SET_USER_LOGIN";
export const TOGGLE_MODIFY_USER_MODAL = 'TOGGLE_MODIFY_USER_MODAL';
export const SET_MY_USER_DATA_FOR_MODIFY = 'SET_USER_DATA_FOR_MODIFY';
export interface User {
    _id?: string
    username: string,
    firstname: string,
    lastname: string,
    email: string,
    employeeNumber: string,
    description: string,
    isActive: boolean,
    hourlyChargingRate: number,
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

export interface ToggleModifyUserModal {
    type: typeof TOGGLE_MODIFY_USER_MODAL,
    modalType: ModalType,
    isModifyModalOpen: boolean
}

export interface SetUserLogin {
    type: typeof SET_USER_LOGIN,
    payload: LoginResponse
}
export interface SetMyUserDataForModify {
    type: typeof SET_MY_USER_DATA_FOR_MODIFY,
    payload: UserRegister
};
export type UserActionTypes = SetMyUserDataForModify | ToggleModifyUserModal | SetUserLogin;
