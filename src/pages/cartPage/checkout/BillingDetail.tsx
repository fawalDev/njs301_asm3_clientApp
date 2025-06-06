import { FormEvent, useState } from "react";
import useTwoWayBinding_Validate from "../../../hooks/useTwoWayBinding_Validate";
import { isNotNull } from "../../../ultil/inputValidationUltil/validate";
import { AddressInput, EmailInput, NameInput, PhoneNumberInput } from "./formInputs/Inputs";
import DarkButton from "../../../components/UI/DarkButton";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { show } from "../../../store/modalSlice";

interface Props {
    className: string
}
function BillingDetail({ className }: Props) {
    const [fullName, onChangeFullName, errorNameMsg] = useTwoWayBinding_Validate<string>('Full name', [isNotNull])
    const [email, onChangeEmail, errorEmailMsg] = useTwoWayBinding_Validate<string>('Email', [isNotNull])
    const [phoneNumber, onChangePhoneNumber, errorPhoneNumberMsg] = useTwoWayBinding_Validate<number>('Phone number', [isNotNull])
    const [address, onChangeAddress, errorAddressMsg] = useTwoWayBinding_Validate<string>('Address', [isNotNull])

    const [isSubmited, setIsSubmited] = useState(false)
    const dispatch = useAppDispatch()
    function submit(e: FormEvent) {
        e.preventDefault()
        setIsSubmited(true)

        // Call API

        if (errorNameMsg || errorEmailMsg || errorPhoneNumberMsg || errorAddressMsg)
            return null

        dispatch(show())

    }
    return (
        <form onSubmit={submit} className={`flex flex-col gap-5 ${className}`}>
            <NameInput val={fullName} onChangeVal={onChangeFullName} invalidMsg={isSubmited ? errorNameMsg : ''} />
            <EmailInput val={email} onChangeVal={onChangeEmail} invalidMsg={isSubmited ? errorEmailMsg : ''} />
            <PhoneNumberInput val={phoneNumber} onChangeVal={onChangePhoneNumber} invalidMsg={isSubmited ? errorPhoneNumberMsg : ''} />
            <AddressInput val={address} onChangeVal={onChangeAddress} invalidMsg={isSubmited ? errorAddressMsg : ''} />
            <div>
                <DarkButton className="py-3 px-10 italic text-lg">Place order</DarkButton>
            </div>
        </form >
    );
}

export default BillingDetail;



