import axios from "axios";
import { Tank } from "./types";
import { BASE_URL } from "../urls";


export async function addTankApi(userId: string, tankInfo: Tank) {
    return await axios.post(BASE_URL + `tank/:${userId}`, tankInfo);
};
