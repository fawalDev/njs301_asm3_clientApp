import type { PropsWithChildren } from "react/";

interface ContainerProps extends PropsWithChildren {
    className?: string
}

export default function ProductsContainer({ children, className }: ContainerProps) {
    return (
        <div className={`grid gap-7 justify-center grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ${className}`}>
            {children}
        </div>
    );
}