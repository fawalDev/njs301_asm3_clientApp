import type { MouseEventHandler, PropsWithChildren } from "react";

interface Props extends PropsWithChildren {
    className?: string
    onClick?: MouseEventHandler
}
function DarkButton({ className, onClick, children }: Props) {
    return <button onClick={onClick} className={`bg-zinc-900 text-white ${className}`}>
        {children}
    </button>
}

export default DarkButton;