export interface UserState {
    id: string,
    username: string,
    employeeNo: string,
    firstName: string,
    lastName: string,
    email: string,
    hourlyChargingRate: number,
    roles: Array<string>,
    shiftPattern: IShiftPattern | undefined,
    jobTitle: string,
    isActive: boolean,
    userType: UserType,
    token: string
};

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

export interface IShiftPattern {
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