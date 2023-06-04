import { UserState, UserActionTypes, UserType, TOGGLE_MODIFY_USER_MODAL, ModalType, SET_USER_LOGIN, UserRegister, TOGGLE_CONFIGURE_USER_DATA_MODAL } from "./types";
import { User } from "./types";

export const initialUserRegister: UserRegister = {
    password: "",
    confirmPassword: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    employeeNumber: "",
    description: "",
    isActive: false,
    hourlyChargingRate: "",
    jobTitle: "",
    userType: UserType.USER,
    roles: [],
    shiftPattern: undefined,
    traceId: ""
}

const initialState: UserState = {
    loggedInInfo: {
        token: undefined,
        id: undefined
    },
    users: [],
    myData: undefined,
    configureUser: {
        userData: initialUserRegister,
        isConfigureModalOpen: false,
        modalType: ModalType.REGISTER
    }
};

export function usersReducer(state = initialState, action: UserActionTypes): UserState {
    switch (action.type) {
        case SET_USER_LOGIN:
            return {
                ...state,
                loggedInInfo: action.payload
            }
        case TOGGLE_CONFIGURE_USER_DATA_MODAL:
            let configureData = {
                ...state.configureUser,
                userData: action.configureUserData,
                modalType: action.modalType,
                isConfigureModalOpen: action.isModalOpen
            }
            return {
                ...state,
                configureUser: configureData
            };

        default:
            return state;
    }
}
