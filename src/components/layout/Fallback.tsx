import type { PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
    className?: string
}
export function Fallback({ children, className }: Props) {
    return <span className={`${className} inline-block rounded-md bg-zinc-200 animate-pulse w-full h-full`}>{children}</span>
}