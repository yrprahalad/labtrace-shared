
export interface UserState {
    currentLoggedInUser: User,
    users: Array<User>
};

export interface User {
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
    shiftPattern: ShiftPattern | undefined,
};

export interface UserRegister extends User {
    password: string,
    confirmPassword: string
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

export interface FetchCurrentUserInfo {
    type: typeof FETCH_CURRENT_USER_INFO,
    payload: User,
};


export interface FetchUsersForAdmin {
    type: typeof FETCH_USERS_FOR_ADMIN,
    payload: User,
    initialCall: boolean
};


export type UserActionTypes = FetchCurrentUserInfo | FetchUsersForAdmin;

