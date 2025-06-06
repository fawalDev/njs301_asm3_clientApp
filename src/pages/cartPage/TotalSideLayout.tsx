import { HTMLAttributes } from 'react';

export default function TotalSideLayout({ className, children }: HTMLAttributes<HTMLDivElement>) {
    return <div>
        <div className={`bg-zinc-100 max-w-96 flex flex-col gap-8 uppercase p-8 ${className}`}>
            {children}
        </div>
    </div>
}

