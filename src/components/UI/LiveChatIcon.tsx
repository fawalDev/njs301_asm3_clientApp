import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons/faFacebookMessenger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import LiveChatBoxModal from "./LiveChatBoxModal";
import store from "../../store";

export default function LiveChatIcon() {
    const [isBounce, setIsBounce] = useState(true)
    const [liveChatDisplayClass, setLiveChatDisplayClass] = useState('hidden')

    function toggleLiveChat() {
        setIsBounce(prev => !prev)
        setLiveChatDisplayClass(prev => {
            if (prev === 'ta-da')
                return 'fading-hidden'
            else
                return 'ta-da'
        })
    }
    function hideLiveChat() {
        setIsBounce(true)
        setLiveChatDisplayClass(prev => {
            if (prev !== 'hidden') return 'fading-hidden'
            return 'hidden'
        })
    }

    useEffect(() => {
        window.addEventListener('keydown', e => {
            const modalHidden = store.getState().modal.hiddenClass

            if (e.key === 'Escape' && modalHidden !== '')
                hideLiveChat()
        })
    }, [])

    return createPortal(
        <>
            <LiveChatBoxModal displayClass={liveChatDisplayClass} />
            <div className="fixed bottom-6 right-7 z-50"
                onClick={toggleLiveChat}>
                <FontAwesomeIcon icon={faFacebookMessenger} bounce={isBounce} className="text-3xl lg:top-7 md:text-4xl lg:text-5xl hover:cursor-pointer p-1 rounded-full bg-black text-white" />
            </div>
        </>
        , document.getElementById('live-chat-icon')!
    )
}
