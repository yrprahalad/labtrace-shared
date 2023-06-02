import { UserState, UserActionTypes, UserType, TOGGLE_MODIFY_USER_MODAL, ModalType, SET_USER_LOGIN } from "./types";
import { User } from "./types";

const initialState: UserState = {
    loginInfo: {
        token: undefined,
        id: undefined
    },
    users: [],
    myData: undefined,
    modifyUser: {
        userData: undefined,
        isModifyModalOpen: false,
        modalType: ModalType.REGISTER
    }
};

export function usersReducer(state = initialState, action: UserActionTypes): UserState {
    switch (action.type) {
        case SET_USER_LOGIN: 
            return {
                ...state,
                loginInfo: action.payload
            }
        case TOGGLE_MODIFY_USER_MODAL:
            let isModifyModalOpen = { ...state.modifyUser, isModifyModalOpen: action.isModifyModalOpen, modalType: action.modalType }
            return {
                ...state,
                modifyUser: isModifyModalOpen
            };

        default:
            return state;
    }
}
