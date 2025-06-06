import { redirect } from "react-router-dom";
import { removeJwt } from "../../ultil/storageUltil/authenTokenUltil";

export function action() {
    removeJwt()
    return redirect('/')
}