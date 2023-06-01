export interface Tank {
    tankName: string,
    tankNumber: string,
    volume: string,
    depthAtVolume: string,
    tankTemperature: number,
    revision: number,
    content: string,
    analysisParameter: string,
    specificationControlType: string,
    analysisFrequency: AnalysisFrequency,
    adminId: string,
    _id: string
};

export enum AnalysisFrequency {
    DAILY = 'Daily',
    WEEKLY = 'Weekly',
    MONTHLY = 'Monthly',
    QUATERLY = 'Quaterly',
    YEARLY = 'Yearly'
};


export const ADD_TANK_INFO = 'ADD_TANK_INFO';
export const SET_TANK_DATA_FOR_MODIFY = 'SET_TANK_DATA_FOR_MODIFY';
export const TOGGLE_MODIFY_TANK_MODAL = 'TOGGLE_MODIFY_TANK_MODAL';

export interface AddTankInfo {
    type: typeof ADD_TANK_INFO,
    payload: Tank,
};

export interface SetTankDataForModify {
    type : typeof SET_TANK_DATA_FOR_MODIFY,
    payload: Tank
};

export interface ToggleModifyTankModal {
    type: typeof TOGGLE_MODIFY_TANK_MODAL,
    payload: boolean
}


export type UserActionTypes = AddTankInfo | SetTankDataForModify | ToggleModifyTankModal;