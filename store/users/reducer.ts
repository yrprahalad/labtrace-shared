import { updateById } from "../../helpers/constants";
import { ModalType, UPDATE_USER, User, UserState, UserType, UserActionTypes, SET_MY_USER_DATA, TOGGLE_USER_MODAL } from "./types";

export const initialUserData: User = {
    _id: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    employeeNumber: "",
    description: "",
    isActive: false,
    hourlyChargingRate: "",
    jobTitle: "",
    userType: UserType.ADMIN,
    roles: [],
    password: "",
    shiftPattern: undefined,
    adminId: ""
}

const initialState: UserState = {
    users: [],
    myData: initialUserData,
    userModal: {
        user: initialUserData,
        isOpen: false,
        modalType: ModalType.EDIT
    }
};

export function usersReducer(state = initialState, action: UserActionTypes): UserState {
    switch (action.type) {

        case SET_MY_USER_DATA:
            return {
                ...state,
                myData: action.myData
            }
        case UPDATE_USER:
            let updatedUser = updateById(action.user, state.users);
            return {
                ...state,
                users: updatedUser
            }
        case TOGGLE_USER_MODAL:
            let userModal = {
                ...state.userModal,
                isOpen: action.isOpen,
                user: action.user,
                modalType: action.modalType
            }
            return {
                ...state,
                userModal
            }
        default:
            return state;
    }
}

