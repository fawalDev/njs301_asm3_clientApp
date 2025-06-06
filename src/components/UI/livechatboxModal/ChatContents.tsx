import { useAppSelector } from '../../../hooks/reduxHooks';
import { HtmlHTMLAttributes } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons/faHeadset';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';

interface ChatMsgProps {
    msgItem: (string | number)[]
}
//  [0]: number 0-agent 1-user
//  [1]: id of user / agent,
//  [2]: sended message

function UserChatMsg({ msgItem }: ChatMsgProps) {
    return (
        <span className='self-start flex justify-between items-center'>
            <FontAwesomeIcon icon={faUser} className='mr-4 text-blue-700' />
            <span className={`rounded-lg py-2 px-6 bg-blue-500 text-white `}>
                {msgItem[2]}
            </span>
        </span>
    )
}

function AgentChatMsg({ msgItem }: ChatMsgProps) {
    return (
        <div className='self-end flex justify-between items-center'>
            <span className={`rounded-lg py-2 px-6 bg-zinc-100 text-zinc-500 `}>
                {msgItem[2]}
            </span>
            <FontAwesomeIcon icon={faHeadset} className='ml-4 text-yellow-700' />
        </div>
    )
}

export default function ChatContents({ className }: HtmlHTMLAttributes<HTMLDivElement>) {
    const livechat = useAppSelector(({ livechat }) => livechat.chat)
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {livechat.map((i, index) => i[0]
                ? <UserChatMsg msgItem={i} key={index} />
                : <AgentChatMsg msgItem={i} key={index} />
            )}
        </div>
    )
}