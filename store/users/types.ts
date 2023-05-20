export interface UserState {
    currentLoggedInUser: IUser,
    users: Array<IUser>
};

export interface IUser {
    _id: string,
    token: string | undefined,
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

export interface FetchCurrentUserInfo {
    type: typeof FETCH_CURRENT_USER_INFO,
    payload: IUser,
};


export interface FetchUsersForAdmin {
    type: typeof FETCH_USERS_FOR_ADMIN,
    payload: Array<IUser>,
    initialCall: boolean
};


export type UserActionTypes = FetchCurrentUserInfo | FetchUsersForAdmin;