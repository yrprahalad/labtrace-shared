import { UserState, UserActionTypes, UserType, FETCH_CURRENT_USER_INFO, FETCH_USERS_FOR_ADMIN, UserRegister, SET_USER_DATA_FOR_MODIFY, TOGGLE_MODIFY_USER_MODAL } from "./types";
import { IUser } from "./types";

const currentLoggedInUser: IUser = {
    _id: '',
    token: undefined,
    username: '',
    password: '',
    firstname: undefined,
    lastname: undefined,
    email: undefined,
    employeeNumber: undefined,
    description: undefined,
    isActive: undefined,
    hourlyChargingRate: undefined,
    jobTitle: undefined,
    adminID: undefined,
    userType: UserType.USER,
    roles: undefined,
    shiftPattern: undefined,
};

const initialUserRegisterValue: UserRegister = {
    username: '',
    password: '',
    firstname: undefined,
    lastname: undefined,
    email: undefined,
    employeeNumber: undefined,
    description: undefined,
    isActive: false,
    hourlyChargingRate: undefined,
    jobTitle: undefined,
    adminID: '',
    userType: UserType.USER,
    roles: undefined,
    shiftPattern: undefined
};

const initialState: UserState = {
    currentLoggedInUser: currentLoggedInUser,
    users: [],
    modifyUser: {
        userData: initialUserRegisterValue,
        isModifyModalOpen: false
    }
};

export function usersReducer(state = initialState, action: UserActionTypes): UserState {
    switch (action.type) {
        case FETCH_CURRENT_USER_INFO:
            return {
                ...state,
                currentLoggedInUser: action.payload,
            };
        case FETCH_USERS_FOR_ADMIN:
            return {
                ...state,
                users: action.payload,
            };

        case SET_USER_DATA_FOR_MODIFY:
            let modifyUser = { ...state.modifyUser, userData: action.payload }
            return {
                ...state,
                modifyUser: modifyUser
            };

        case TOGGLE_MODIFY_USER_MODAL:
            let isModifyModalOpen = { ...state.modifyUser, isModifyModalOpen: action.payload }
            return {
                ...state,
                modifyUser: isModifyModalOpen
            };

        default:
            return state;
    }
}
