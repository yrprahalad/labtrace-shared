import axios from "axios";
import { UserLogin, UserRegister } from "./types";
import { BASE_URL } from "../urls";

export async function userLoginAPI(userInfo: UserLogin) {
    return await axios.post(BASE_URL + 'login', userInfo);
};


export async function userRegisterAPI(userInfo: UserRegister) {
    return await axios.post(BASE_URL + 'register', userInfo);
};

export async function getAllUsersForAdminAPI(adminID: string) {
    return await axios.get(BASE_URL + 'byId', { params: adminID });
};