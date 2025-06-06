import { defer, type LoaderFunctionArgs } from "react-router-dom";
import loaderInitiation from "../../routes/loaders/0loaderInitiation";
import store from "../../store";
import { productsLoader } from "../../routes/loaders/productsLoaders";

export function loader(loaderArgs: LoaderFunctionArgs) {
    loaderInitiation(loaderArgs)
    const fetchedProducts = store.getState().fetchedProducts.products;
  
    if (fetchedProducts.length > 0)
      return defer({
        trendingProducts: fetchedProducts,
      });
    else
      return defer({
        trendingProducts: productsLoader(),
      });
  }
  