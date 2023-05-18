import { LoaderActions, LoaderState, SET_LOADER_INFO, CLEAR_LOADER_INFO } from "./types";

const initailState: LoaderState = {
    severity: undefined,
    message: "",
    show: false
}

export const loaderReducer = (state = initailState, action: LoaderActions): LoaderState => {
    switch (action.type) {
        case SET_LOADER_INFO:
            return {
                ...state,
                severity: action.severity,
                message: action.message,
                show: action.show
            };
        case CLEAR_LOADER_INFO:
            return {
                ...initailState,
            };
        default:
            return state;
    }
}