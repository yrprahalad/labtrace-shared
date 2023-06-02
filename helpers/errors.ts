export const apiErrorMessage = (error: any) => {
    if (error.message && typeof error.message === 'string') {
        return error.message;
    } else if (error.response && error.response.data && typeof error.response.data === 'string') {
        return error.response.data;
    } else if (error.response && error.response.data && error.response.data.error && typeof error.response.data.error === 'string'){
        return error.response.data.error;
    }else return "Internal Server Error"
} 