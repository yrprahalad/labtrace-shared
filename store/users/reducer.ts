import { UserState, UserActionTypes, UserType, FETCH_CURRENT_USER_INFO, FETCH_USERS_FOR_ADMIN } from "./types";
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
}

const initialState: UserState = {
    currentLoggedInUser: currentLoggedInUser,
    users: []
};

export function usersReducer(state = initialState, action: UserActionTypes): UserState {
    switch (action.type) {
        case FETCH_CURRENT_USER_INFO:
            return {
                ...state,
                currentLoggedInUser: action.payload,
            };
        case FETCH_USERS_FOR_ADMIN:
            let users = state.users.concat(action.payload);
            return {
                ...state,
                users: users,
            };

        default:
            return state;
    }
}
