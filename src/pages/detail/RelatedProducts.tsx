import { Await, useLoaderData } from "react-router-dom";
import ProductsContainer from "../../components/layout/ProductsContainer";
import store from "../../store";
import { DetailProps } from ".";
import { Suspense, useEffect, useState } from "react";
import { IProduct } from "../../interfaces/IProduct";
import ProductItem from "../../components/layout/ProductIem";
import ProductsFallback from "../../components/layout/ProductsFallback";
import { getProducts } from "../../routes/loaders/productsLoaders";
import ProductModal from "../../components/layout/ProductModal";
import { addManyProducts as addManyProductsAction } from "../../store/fetchedProductsSlice";


// RECURSION function 3 times
async function relatedLoader(product: IProduct, i = 0) {
    const related = store.getState().fetchedProducts.products.filter(i => i.category === product.category && i._id?.$oid !== product._id?.$oid)

    if (related.length > 0)
        return related

    if (i > 3) return []

    // call API, if find related products, dispath them to Redux's store
    const products = await getProducts()
    const relatedProds = products.filter(i => i.category === product.category && i._id?.$oid !== product._id?.$oid)
    if (relatedProds.length > 0) store.dispatch(addManyProductsAction(relatedProds))
    return await relatedLoader(product, ++i)
}

function RelatedProducts({ product, className, isFallback = false }: DetailProps) {
    const [relatedProds, setRelatedProds] = useState<IProduct[]>()

    // prevent recurion if `isFallback == true` product undefind lead to infinity loop
    !isFallback && useEffect(() => {
        (async function () {
            const relatedProducts = await relatedLoader(product!)
            setRelatedProds(relatedProducts)
        })()
    }, [product])
    return (
        <div className={className}>
            <ProductModal />
            <h4 className="text-2xl uppercase mb-6">Related Products</h4>
            <ProductsContainer >
                {isFallback && <ProductsFallback />}
                {isFallback || !relatedProds && <ProductsFallback />}
                {relatedProds?.map(i => <ProductItem product={i} key={i._id?.$oid} />)}
            </ProductsContainer>
            {!isFallback && relatedProds?.length === 0 && <div className="bg-zinc-200 py-10 text-center animate-pulse">Any related product found!</div>}
        </div>
    );
}

export default function RelatedProductsSuspense({ className }: DetailProps) {
    const { product }: any = useLoaderData()

    return (
        <Suspense fallback={<RelatedProducts className={className} isFallback />}>
            <Await resolve={product}>
                {(loaded: IProduct) =>
                    <RelatedProducts product={loaded} className={className} />}
            </Await>
        </Suspense>
    )
}
