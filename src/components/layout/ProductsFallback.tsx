import ProductItem from "./ProductIem";

export default function ProductsFallback() {
    return (
        <>
            <ProductItem product={new Object()} isFallback={true} />
            <ProductItem product={new Object()} isFallback={true} />
            <ProductItem product={new Object()} isFallback={true} />
        </>
    );
}
