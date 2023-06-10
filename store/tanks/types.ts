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
    createdTime: Date
    lasUpdatedTime: Date
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