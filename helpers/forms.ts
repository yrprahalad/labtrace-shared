export interface FormInputFields {
    value: string | undefined,
    name: string | undefined,
    onChange: () => void,
};


export interface FormInputValue {
    title: string,
    name: string,
    type: string,
    value: string | number | undefined,
}

export const formValidation = (fieldName: string, value: string | undefined) => {
    switch (fieldName) {
        case 'email':
            const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            if (value && !regexEmail.test(value)) {
                return "Please enter a valid Email"
            } else if (!value) {
                return 'Required'
            }
            break;
        case 'password':
            const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
            const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
            if (value && !strongRegex.test(value)) {
                return "Password should contains atleast one Capital letter and Number, should be between range 8 to 14"
            } else if (!value) {
                return 'Required'
            }
            break;

        case 'username':
        case 'lastname':
        case 'firstname':
        case 'employeeNumber':
        case 'hourlyChargingRate':
        case 'jobTitle':
            if (!value) {
                return 'Required!'
            }
            break;
        default:
            return 'Test'
    };

}