export interface FormInputFields {
    value : string | undefined,
    name: string | undefined,
    onChange: () => void,
};


export interface FormInputValue {
    title : string,
    name: string,
    type: string,
    value : string | number | undefined,
}