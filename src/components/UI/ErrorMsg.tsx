interface Props {
    msg: string
    textColor?: string
    className?: string
}

export default function ErrorMsg({ msg, textColor, className }: Props) {
    return (
        <div className={`${msg ? 'h-8' : 'h-0'} ${textColor || 'text-red-700'} duration-300 ${className}`}>
            <b className="block"> {msg} </b>
        </div>
    )
}