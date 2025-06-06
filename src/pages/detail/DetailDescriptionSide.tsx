import { Suspense } from "react";
import { DetailProps } from ".";
import { Fallback } from "../../components/layout/Fallback";
import { Await, useLoaderData } from "react-router-dom";
import { IProduct } from "../../interfaces/IProduct";

function DetailDescriptionSide({ product, className, isFallback = false }: DetailProps) {
    const article = product?.long_desc?.split('\n') || new Array<string>('', '', '')

    return (
        <div className={`${className} flex flex-col gap-4 2xl:gap-6 left-in`}>
            <div >
                <span className="inline-block bg-zinc-900 text-white px-5 py-3 uppercase">
                    Description
                </span>
            </div>
            <h3 className="uppercase text-black text-xl 2xl:text-2xl">Product Description</h3>
            <article className="flex flex-col gap-1 2xl:gap-2">
                {article?.map((i, index) =>
                    <p key={index} className={index === 0 ? 'uppercase mb-1' : ''}>
                        {isFallback ? <Fallback /> : i}
                    </p>
                )}
            </article>
        </div>
    );
}

export default function DetailDescriptionSideSuspense({ className }: DetailProps) {
    const { product }: any = useLoaderData()
    return (
        <Suspense fallback={<DetailDescriptionSide className={className} isFallback />}>
            <Await resolve={product}
                children={(loaded: IProduct) =>
                    <DetailDescriptionSide product={loaded} className={className} />
                }>
            </Await>
        </Suspense>
    )
};