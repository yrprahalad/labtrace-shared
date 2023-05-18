import { LoaderSeverityType, ISetLoaderInfo, SET_LOADER_INFO, IClearLoaderInfo, CLEAR_LOADER_INFO } from "./types";

export const setLoaderInfo = (severity: LoaderSeverityType, message: string, show: boolean): ISetLoaderInfo => {
    return {
        severity,
        message,
        type: SET_LOADER_INFO,
        show
    }
};

export const clearLoaderInfo = (): IClearLoaderInfo => {
    return {
        type: CLEAR_LOADER_INFO,
    }
};


