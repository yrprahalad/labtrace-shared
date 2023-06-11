export const apiErrorMessage = (error: any) => {
    if (error.response && error.response.data && typeof error.response.data === 'string') {
        return error.response.data;
    } else if (error.response && error.response.data && error.response.data.error && typeof error.response.data.error === 'string') {
        return error.response.data.error;
    } else return "Internal Server Error"
} 