import type IAuthenResponse from "../interfaces/IAuthenResponse"
import type IUser from "../interfaces/IUser"

export default class AuthenResponse implements IAuthenResponse {
    message: string
    token: string
    user: IUser
    constructor(response: AuthenResponse | any) {
        this.message = response.message
        this.token = response.token
        this.user = response.user
    }
}