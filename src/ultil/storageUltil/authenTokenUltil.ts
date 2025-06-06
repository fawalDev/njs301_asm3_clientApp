import type IAuthenResponse from "../../interfaces/IAuthenResponse";

import User from "../../models/User";
import {  removeLocalStorageCartItems } from "./cartItemsUltil";
import StorageEnum from "./StorageEnum";

export function addJwt(authenRes: IAuthenResponse) {
    localStorage.setItem(StorageEnum.authenToken, authenRes.token)
    localStorage.setItem(StorageEnum.userInfor, JSON.stringify(authenRes.user))
}

export function getJwt() {
    return localStorage.getItem(StorageEnum.authenToken)
}

export function getUserInfor(): User | undefined {
    const inforJson = localStorage.getItem(StorageEnum.userInfor)
    return User.fromObject(JSON.parse(inforJson!))
}


export function removeJwt() {
    localStorage.removeItem(StorageEnum.authenToken)
    localStorage.removeItem(StorageEnum.userInfor)
    removeLocalStorageCartItems()
}