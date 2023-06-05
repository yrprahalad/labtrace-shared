import { UserState, UserActionTypes, UserType, TOGGLE_MODIFY_USER_MODAL, ModalType, SET_USER_LOGIN, UserRegister, TOGGLE_CONFIGURE_USER_DATA_MODAL, FETCH_USER_DATA, ADD_USERS_STATE } from "./types";

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
        case FETCH_USER_DATA:
            return {
                ...state,
                myData: action.payload.myData,
                users: action.payload.users
            }
        case ADD_USERS_STATE:
            if (action.initialCall) {
                return {
                    ...state
                }
            } else {
                if (action.user) {
                    let users = state.users;
                    users.push(action.user)
                    return {
                        ...state,
                        users
                    }
                } else return { ...state }
            }


        default:
            return state;
    }
}
