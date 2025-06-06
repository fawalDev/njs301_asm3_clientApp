import type IAuthenError from "../interfaces/IAuthenError"

export default class ErrorResponse {
    message: string
    errors?: IAuthenError

    static fromObj(error?: ErrorResponse | any) {
        return new ErrorResponse(error?.message, error?.errors)
    }
    constructor(message: string, error?: IAuthenError) {
        this.message = message || ''
        this.errors = error
    }
}
