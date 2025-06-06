import type { IProduct } from "../../interfaces/IProduct";

import { useAppDispatch } from "../../hooks/reduxHooks";
import { show as showAction } from "../../store/modalSlice";
import { setProduct } from "../../store/productModalSlice";
import convertToFraction from "../../ultil/convertToFraction";
import { Fallback } from "./Fallback";
// css
import classes from "./ProductItem.module.css";

interface DetailProps {
  product: IProduct | any;
  className?: string;
  isFallback?: boolean;
}
export default function ProductItem({ product, className, isFallback = false }: DetailProps) {
  const dispath = useAppDispatch();

  const show = () => {
    dispath(showAction());
    dispath(setProduct(product));
  };

  return (
    <section
      className={`flex flex-col gap-2 h-full justify-between items-center text-center
        ${classes["product-item"]} 
        // fade-in is definded in index.css
        fade-in
        ${className}`}
      onClick={show}>
      {isFallback
        ? <Fallback className={classes['img']} />
        : <img src={product.img1} alt={product.name}
          className={`object-contain ${classes['img']}`} />
      }
      <p>{isFallback ?
        product.name
        : product.name}</p>
      <span className="text-zinc-500">
        {isFallback ?
          <Fallback />
          : convertToFraction(String(product?.price))} VND
      </span>
    </section>
  );
}
