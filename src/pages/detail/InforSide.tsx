import { Await, useLoaderData } from "react-router-dom"
import { DetailProps } from "."
import convertToFraction from "../../ultil/convertToFraction"
import AddToCartBtn from "./AddToCartBtn"
import { Suspense } from "react"
import { Fallback } from "../../components/layout/Fallback"
import { IProduct } from "../../interfaces/IProduct"


function InforSide({ product, className, isFallback = false }: DetailProps) {
    return (
        <div className={`${className} flex flex-col gap-4 h-full justify-between left-in`}>
            <h1 className="uppercase text-black text-3xl 2xl:text-5xl">{isFallback ? <Fallback /> : product!.name}</h1>
            <span className="text-xl">{isFallback ? <Fallback /> : convertToFraction(product!.price) + ' VNĐ'}</span>
            <p>{isFallback ? <Fallback /> : product!.short_desc}</p>
            <p><span className="uppercase text-black mr-2">Category:</span>{isFallback ? <Fallback /> : product!.category}</p>
            <div>
                <AddToCartBtn productToAdd={product!} />
            </div>
        </div>
    )
}

export default function InforSideSuspense({ className }: DetailProps) {
    const { product }: any = useLoaderData()
    return (
        <Suspense fallback={<InforSide className={className} isFallback />}>
            <Await resolve={product}
                children={(loaded: IProduct) =>
                    <InforSide product={loaded} className={className} />}>
            </Await>
        </Suspense>
    )
}