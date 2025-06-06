import IUser from "./IUser"

export default interface IAuthenResponse {
    message: string
    user: IUser
    token: string
}