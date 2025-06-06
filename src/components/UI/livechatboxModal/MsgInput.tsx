import useTwoWayBinding from '../../../hooks/useTwoWayBinding';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons/faPaperPlane';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons/faPaperclip';
import { faFaceSmile } from '@fortawesome/free-solid-svg-icons/faFaceSmile';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { msgAction } from '../../../store/livechatSlice';
import { getUserInfor } from '../../../ultil/storageUltil/authenTokenUltil';
import { FormEvent } from 'react';

export default function MsgInput() {
    const [msg, onChangeMsg, setMsg] = useTwoWayBinding('')

    const userInfor = getUserInfor()
    const dispatch = useAppDispatch()
    function sendMsg(e: FormEvent) {
        e.preventDefault()
        dispatch(msgAction([1, userInfor?.email!, msg]))
        setMsg('')
    }
    return (
        <form onSubmit={sendMsg} className='fixed bottom-0 left-0 bg-zinc-100 py-3 px-4 w-full flex items-center gap-4'>
            <input type='text' placeholder='Enter Message!' className='px-5 py-3 rounded-md'
                value={msg} onChange={onChangeMsg} />
            <button type='button' className='hidden md:inline-block'>
                <FontAwesomeIcon icon={faPaperclip} className='text-zinc-500' />
            </button>
            <button type='button' className='hidden md:inline-block'>
                <FontAwesomeIcon icon={faFaceSmile} className='text-zinc-500' />
            </button>
            <button>
                <FontAwesomeIcon icon={faPaperPlane} className='text-blue-500' />
            </button>
        </form>
    )
}