import { Await, defer, LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import { Suspense } from "react";
import { IProduct } from "../../interfaces/IProduct";
import ProductItem from "../../components/layout/ProductIem";
import store from "../../store";
import { productsLoader } from "../../routes/loaders/productsLoaders";
import loaderInitiation from "../../routes/loaders/0loaderInitiation";
import ProductsFallback from "../../components/layout/ProductsFallback";

export default function ProductsBoard() {
  const loader: any = useLoaderData();
  const { products } = loader;

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 justify-center italic">
      <Suspense fallback={<ProductsFallback />}>
        <Await resolve={products}>
          {(loaded: IProduct[]) =>
            loaded.map(i => <ProductItem product={i} key={i._id?.$oid} />)
          }
        </Await>
      </Suspense>
    </div>
  );
}

export function allLoader(loaderArgs: LoaderFunctionArgs) {
  loaderInitiation(loaderArgs)

  const fetchedProducts = store.getState().fetchedProducts.products;

  if (fetchedProducts.length > 0)
    return defer({
      products: fetchedProducts,
    });
  return defer({
    products: productsLoader(),
  });
}

export function categorizedProductsLoader(args: LoaderFunctionArgs) {
  loaderInitiation(args)
  const { params } = args

  const fetchedProducts = store.getState().fetchedProducts.products
  if (fetchedProducts.length > 0)
    return defer({
      products: fetchedProducts.filter(i => i.category === params.category?.toLocaleLowerCase())
    })
  else
    return defer({
      // Immediately Invoked Async Function Expression (IIAFE) || Async IIFE
      products: (async function () {
        const products = await productsLoader()
        return products.filter(i => i.category === params.category?.toLocaleLowerCase())
      })()
    })
}
