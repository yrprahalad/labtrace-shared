import { UserState, UserActionTypes, UserType, FETCH_USER_INFO } from "./types";

const initialState: UserState = {
    id: "",
    username: "",
    password: "",
    token: undefined,
    firstname: undefined,
    lastname: undefined,
    email: undefined,
    employeeNumber: undefined,
    description: undefined,
    isActive: undefined,
    hourlyChargingRate: undefined,
    jobTitle: undefined,
    adminID: "",
    userType: UserType.ADMIN,
    roles: undefined,
    shiftPattern: undefined
};

export function usersReducer(state = initialState, action: UserActionTypes): UserState {
    switch (action.type) {
        case FETCH_USER_INFO:
            return {
                ...action.payload,
            };

        default:
            return state;
    }
}
