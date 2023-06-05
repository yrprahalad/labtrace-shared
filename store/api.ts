import axios from "axios";
import { BASE_URL } from "./urls";

export async function getUserDataApi(id: string) {
    return await axios.post(BASE_URL + 'users', { id });
};
