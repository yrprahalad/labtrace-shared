import { UserState, UserActionTypes, UserType, FETCH_USER_INFO } from "./types";

const initialState: UserState = {
    id: "",
    username: "",
    employeeNo: "",
    firstName: "",
    lastName: "",
    email: "",
    hourlyChargingRate: 0,
    roles: [],
    shiftPattern: {
        from: '',
        to: '',
        descripton: ''
    },
    jobTitle: "",
    isActive: false,
    userType: UserType.USER,
    token: '',
    adminId: undefined
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
