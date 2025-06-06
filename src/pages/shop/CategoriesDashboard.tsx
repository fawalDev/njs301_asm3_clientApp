import Categories from "./Categories";
import { PropsWithChildren } from "react";

export default function CategoriesDashboard({ children }: PropsWithChildren) {
    return (
        <div className="grid md:grid-cols-4 gap-4">
            <Categories className='hidden md:col-start-1 md:col-end-2' />
            <div className='md:col-start-2 md:col-end-5'>
                {children}
            </div>
        </div>
    )
}