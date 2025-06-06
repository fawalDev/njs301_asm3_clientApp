import { redirect, type ActionFunctionArgs } from "react-router-dom"
import { ServerAPI } from "../../../ultil/serverAPIs"
import AuthenResponse from "../../../models/AuthenRespone"
import { addJwt } from "../../../ultil/storageUltil/authenTokenUltil"

export async function action(args: ActionFunctionArgs) {
    // args
    const data = Object.fromEntries((await args.request.formData()).entries())

    const response = await fetch(ServerAPI.signup, {
        method: args.request.method,
        headers: {
            // MIME type (media type || content type)
            'content-type': 'application/json'
        },
        body: JSON.stringify(data),
    })
    if (response.status === 422)
        return response

    if (response.status === 201) {
        const authenRes = new AuthenResponse(await response.json())
        addJwt(authenRes)
    }
    return redirect('/')
}