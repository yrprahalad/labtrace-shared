import axios from "axios";
import { User, UserLogin, UserRegister } from "./types";
import { BASE_URL } from "../urls";

export async function userRegisterAPI(userInfo: UserRegister) {
    return await axios.post(BASE_URL + 'user/register', userInfo);
};

export async function getAllUsersForAdminAPI(adminID: string) {
    return await axios.post(BASE_URL + 'user/byId', { adminID });
}; 


// Refactored Functions 

export async function loginUserApi(userInfo: UserLogin) {
    return await axios.post(BASE_URL + 'auth/login', userInfo);
};

export async function addUserViaIdApi(id: string, user: User) {
    const headers = {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    };
    return await axios.post(BASE_URL + 'addUser', { adminId: id, user }, { headers });
};
