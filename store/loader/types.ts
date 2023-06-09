export const SET_LOADER_INFO = "SET_LOADER_INFO";
export const CLEAR_LOADER_INFO = "CLEAR_LOADER_INFO"
export interface LoaderState {
    severity: LoaderSeverityType | undefined,
    message: string,
    show: boolean
}

export enum LoaderSeverityType {
    ERROR = 'error',
    WARNING = 'warning',
    SUCCESS = 'success',
    INFO = 'info'
}
export interface SetLoader {
    type: typeof SET_LOADER_INFO,
    severity: LoaderSeverityType,
    message: string,
    show: boolean
}
export interface ClearLoader {
    type: typeof CLEAR_LOADER_INFO,
}

export type LoaderActions = SetLoader | ClearLoader;