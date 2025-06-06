import { defer, LoaderFunctionArgs } from "react-router-dom";
import Container from "../../components/UI/Container";
import { IProduct } from "../../interfaces/IProduct";
import loaderInitiation from "../../routes/loaders/0loaderInitiation";
import store from "../../store";
import { productLoader } from "../../routes/loaders/productsLoaders";
import ImgSide from "./ImgSide";
import InforSide from "./InforSide";
import DetailDescriptionSide from "./DetailDescriptionSide";
import RelatedProducts from "./RelatedProducts";
import useScrollToTopPage from "../../hooks/useScrollToTopPage";
import useScrollToTopWhenPageIdle from "../../hooks/useScrollToTopWhenPageIdle";

// DetailProps interface is used for `ImgSide.tsx` & `InforSide.tsx`
export interface DetailProps {
    product?: IProduct
    className?: string
    isFallback?: boolean
}

export default function DetailIndex() {
    useScrollToTopPage()
    useScrollToTopWhenPageIdle()

    return (
        <Container className="italic text-zinc-500 text-xs xl:text-sm 2xl:text-xl">
            <div className="grid md:grid-cols-5 gap-4 2xl:gap-10 w-full">
                <ImgSide className="md:col-start-1 md:col-end-3" />
                <InforSide className="md:col-start-3 md:col-end-6" />
                <DetailDescriptionSide className="mt-8 md:col-start-1 md:col-end-6" />
                <RelatedProducts className="mt-8 md:col-start-1 md:col-end-6" />
            </div>
        </Container>
    );
}

export function loader(args: LoaderFunctionArgs) {
    loaderInitiation(args, false)
    const paramName = Object.keys(args.params)[0]
    // find in `fetchedDetailProducts` then `fetchedProducts` if not found
    const product =
        store.getState().fetchedDetailProducts.products.find(i => i._id === args.params[paramName])
        || store.getState().fetchedProducts.products.find(i => i._id?.$oid === args.params[paramName])

    if (product)
        return defer({
            product: product
        })
    else
        return defer({
            // call api to get `product` and dispath this `product` to `fetchedDetailProducts`
            product: productLoader(args.params[paramName]!)
        })
}