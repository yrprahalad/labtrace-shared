import axios from "axios";
import { UserLogin } from "./types";
import { BASE_URL } from "../urls";

export async function userLoginAPI(userInfo: UserLogin) {
    return await axios.post(BASE_URL + 'login', userInfo);
};
