import { type PropsWithChildren, useEffect } from "react";
import { createPortal } from "react-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setHideClass as fadingHide } from "../../store/modalSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

// css
import classes from './Modal.module.css'


export function useHideModal() {
    const dispath = useAppDispatch()
    return () => {
        dispath(fadingHide('fading-hidden'))
    }
}

function Modal({ children }: PropsWithChildren) {
    const hidden = useAppSelector(({ modal }) => modal.hiddenClass)

    const hide = useHideModal()

    useEffect(() => {
        window.addEventListener('keydown', e => {
            if (e.key === 'Escape')
                hide()
        })
    }, [])

    return createPortal(
        <div className={hidden}>
            <div className={classes['backdrop']} onClick={hide}></div>
            <div className={`${classes['modal']} `}>
                <FontAwesomeIcon icon={faXmark} onClick={hide} className="fixed top-4 right-10 text-3xl lg:top-7 lg:text-4xl hover:cursor-pointer" />
                {children}
            </div>
        </div>,
        document.getElementById('modal')!
    );
}

export default Modal;