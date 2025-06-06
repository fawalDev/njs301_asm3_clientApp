import { ChangeEventHandler } from 'react';
import Input from './InputBase';
import ErrorMsg from '../../../../components/UI/ErrorMsg';

interface Props {
    val: string | number
    onChangeVal: ChangeEventHandler<HTMLInputElement>
    invalidMsg: string
}

export function NameInput({ val, onChangeVal, invalidMsg }: Props) {
    return (
        <div>
            <Input fieldName='Full Name' id='full-name' placeHolder='Enter Your Full Name Hear!'
                val={val} onChangeVal={onChangeVal} />
            <ErrorMsg msg={invalidMsg} className='font-thin pt-1 px-4' />
        </div>
    );
}

export function EmailInput({ val, onChangeVal, invalidMsg }: Props) {
    return (
        <div>
            <Input fieldName='Email' id='email' placeHolder='Enter Your Email Hear!'
                val={val} onChangeVal={onChangeVal} />
            <ErrorMsg msg={invalidMsg} className='font-thin pt-1 px-4' />
        </div>
    );
}

export function PhoneNumberInput({ val, onChangeVal, invalidMsg }: Props) {
    return (
        <div>
            <Input type="number" fieldName='Phone number' id='phone-number' placeHolder='Enter Your Phone Number Hear!'
                val={val} onChangeVal={onChangeVal} />
            <ErrorMsg msg={invalidMsg} className='font-thin pt-1 px-4' />
        </div>
    );
}

export function AddressInput({ val, onChangeVal, invalidMsg }: Props) {
    return (
        <div>
            <Input fieldName='Address' id='address' placeHolder='Enter Your Address Hear!'
                val={val} onChangeVal={onChangeVal} />
            <ErrorMsg msg={invalidMsg} className='font-thin pt-1 px-4' />
        </div>
    );
}
