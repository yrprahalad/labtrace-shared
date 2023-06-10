import { LoaderSeverityType, SetLoader, SET_LOADER_INFO, ClearLoader, CLEAR_LOADER_INFO } from "./types";

export const setLoader = (severity: LoaderSeverityType, message: string, show: boolean): SetLoader => {
    return {
        severity,
        message,
        type: SET_LOADER_INFO,
        show
    }
};

export const clearLoader = (): ClearLoader => {
    return {
        type: CLEAR_LOADER_INFO,
    }
};


