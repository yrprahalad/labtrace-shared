export interface Tank {
    tankName: string,
    tankNumber: string,
    volume: string,
    depthAtVolume: string,
    tankTemperature: number,
    revision: number,
    content: string,
    analysisParameter: string,
    specificationCtrlType: string,
    analysisFreq: AnalysisFrequency,
    userID: string,
    id: string
};

export enum AnalysisFrequency {
    DAILY = 'Daily',
    WEEKLY = 'Weekly',
    MONTHLY = 'Monthly',
    QUATERLY = 'Quaterly',
    YEARLY = 'Yearly'
};

export enum ModalType {
    EDIT = 'edit',
    REGISTER = 'register',
    VIEW = 'view'
};