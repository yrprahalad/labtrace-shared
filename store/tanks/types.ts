import { ModalType } from "../users/types";

export const SET_TANKS = "SET_TANKS";
export const UPDATE_TANK = "UPDATE_TANK";
export const TOGGLE_TANK_MODAL = "TOGGLE_TANK_MODAL";

export interface TankState {
    tanks: Array<Tank>,
    tankModal: {
        tank: Tank,
        isOpen: boolean,
        modalType: ModalType
    }
}


export interface Tank {
    _id: string
    adminId: string
    name: string
    tankNumber: string
    volume: string
    depthAtVolume: string
    temperature: number
    revision: number
    content: string
    analysisParameter: string
    specificationCtrlType: string
    analysisFreq: AnalysisFrequency
    createdTime?: Date
    lasUpdatedTime?: Date
};

export enum AnalysisFrequency {
    DAILY = 'Daily',
    WEEKLY = 'Weekly',
    MONTHLY = 'Monthly',
    QUATERLY = 'Quaterly',
    YEARLY = 'Yearly'
};

export interface SetTanks {
    type: typeof SET_TANKS,
    tanks: Array<Tank>
};

export interface UpdateTank {
    type: typeof UPDATE_TANK,
    tank: Tank
}

export interface ToggleTankModal {
    type: typeof TOGGLE_TANK_MODAL,
    tank: Tank,
    modalType: ModalType,
    isOpen: boolean
}

export type TankActionTypes = SetTanks | UpdateTank | ToggleTankModal