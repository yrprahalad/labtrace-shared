import { updateById } from "../../helpers/constants";
import { ModalType } from "../types";
import { AnalysisFrequency, SET_TANKS, TOGGLE_TANK_MODAL, Tank, TankActionTypes, TankState, UPDATE_TANK } from "./types";

export const initalTanksData: Tank = {
    _id: "",
    adminId: "",
    name: "",
    tankNumber: "",
    volume: "",
    depthAtVolume: "",
    temperature: 0,
    revision: 0,
    content: "",
    analysisParameter: "",
    specificationCtrlType: "",
    analysisFreq: AnalysisFrequency.DAILY,
}


const initialState: TankState = {
    tanks: [],
    tankModal: {
        tank: initalTanksData,
        isOpen: false,
        modalType: ModalType.EDIT
    }
}

export function tanksReducer(state = initialState, action: TankActionTypes): TankState {
    switch (action.type) {

        case SET_TANKS:
            return {
                ...state,
                tanks: action.tanks
            }
        case UPDATE_TANK:
            let updatedTanks = updateById(action.tank, state.tanks);
            return {
                ...state,
                tanks: updatedTanks
            }
        case TOGGLE_TANK_MODAL:
            let tankModal = {
                ...state.tankModal,
                isOpen: action.isOpen,
                tank: action.tank,
                modalType: action.modalType
            }
            return {
                ...state,
                tankModal
            }
        default:
            return state;
    }
}