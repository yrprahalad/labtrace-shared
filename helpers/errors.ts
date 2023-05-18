export const apiErrorMessage = (error: any) => {
    if (error.response.data) {
        return error.response.data
    } else if (error.message) {
        return error.message;
    } else return "Network Error"
}