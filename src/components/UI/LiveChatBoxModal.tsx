import { createPortal } from 'react-dom';
import ChatContents from './livechatboxModal/ChatContents';
// css
import classes from './LiveChatBoxModal.module.scss';
import MsgInput from './livechatboxModal/MsgInput';

interface Props {
    displayClass?: string
}
function LiveChatBoxModal({ displayClass = 'hidden' }: Props) {
    return createPortal(
        <div className={`overflow-y-hidden ${classes['modal']} ${displayClass}`}>
            <div className="p-8">
                <span className='flex justify-between items-center'>
                    <h6 className='font-semibold'>Customer Support</h6>
                    <span className='italic text-zinc-500 bg-zinc-200 py-1 px-5'>Let'chat app</span>
                </span>
                <hr className='bg-zinc-500 mt-5 mb-3' />
                <ChatContents className={`overflow-y-auto ${classes['chat-contents']}`} />
            </div>
            <MsgInput />
        </div>,
        document.getElementById('live-chat-box-modal')!
    );
}

export default LiveChatBoxModal;

