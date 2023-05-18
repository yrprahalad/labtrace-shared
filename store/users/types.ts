export interface UserState {
    id: string,
    username: string,
    password: string,
    token: string | undefined,
    firstname: string | undefined,
    lastname: string | undefined,
    email: string | undefined,
    employeeNumber: string | undefined,
    description: string | undefined,
    isActive: boolean | undefined,
    hourlyChargingRate: number | undefined,
    jobTitle: string | undefined,
    adminID: string,
    userType: UserType,
    roles: Array<[]> | undefined,
    shiftPattern: ShiftPattern | undefined,
}

export interface UserLogin {
    username: string,
    password: string,
    userType: UserType,
}

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

export const FETCH_USER_INFO = 'FETCH_USER_INFO';

export interface FetchUserInfo {
    type: typeof FETCH_USER_INFO,
    payload: UserState
};

export type UserActionTypes = FetchUserInfo;