import { redirect, type RouteObject } from "react-router-dom";
import { Fallback } from "../components/layout/Fallback";
import { lazy, Suspense } from "react";
import { PageUrlsList } from "../ultil/clientRoutes";

const ShopRoot = lazy(() => import("../pages/shop"));
const ProductsBoard = lazy(() => import("../pages/shop/ProductsBoard"));

const shopRoute: RouteObject = {
    path: PageUrlsList.Shop,
    element: (
        <Suspense fallback={<Fallback />}>
            <ShopRoot />
        </Suspense>
    ),
    children: [
        {
            index: true,
            loader: () => redirect("all"),
        },
        {
            path: "all",
            element: (
                <Suspense fallback={<Fallback />}>
                    <ProductsBoard />
                </Suspense>
            ),
            loader: (args) => import("../pages/shop/ProductsBoard").then(i => i.allLoader(args)),
        },
        {
            path: ":category",
            element: (
                <Suspense fallback={<Fallback />}>
                    <ProductsBoard />
                </Suspense>
            ),
            loader: (args) => import("../pages/shop/ProductsBoard").then(i => i.categorizedProductsLoader(args)),
        },
    ],
};

export default shopRoute;
