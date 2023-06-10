export const UPDATE_USER = "UPDATE_USER"
export const TOGGLE_USER_MODAL = "TOGGLE_USER_MODAL";
export const SET_MY_USER_DATA = "SET_MY_USER_DATA"

export interface UserState {
    users: Array<User>,
    myData: User,
    userModal: {
        user: User,
        isOpen: boolean,
        modalType: ModalType
    }
};

export interface User {
    _id: string
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
    adminId: string
};

export enum UserType {
    ADMIN = 'Admin',
    USER = 'User',
    SUPERADMIN = 'Super User'
};

export enum ModalType {
    EDIT = 'edit',
    REGISTER = 'register',
    VIEW = 'view'
};

export interface ShiftPattern {
    from: string | Date,
    to: string | Date,
    descripton: string
};

export interface Login {
    username: string,
    password: string,
    userType: UserType,
};

export interface UpdateUser {
    type: typeof UPDATE_USER,
    user: User
}

export interface ToggleUserModal {
    type: typeof TOGGLE_USER_MODAL,
    user: User,
    modalType: ModalType,
    isOpen: boolean
}

export interface SetMyUserData {
    type: typeof SET_MY_USER_DATA,
    myData: User
}

export type UserActionTypes = UpdateUser | ToggleUserModal | SetMyUserData