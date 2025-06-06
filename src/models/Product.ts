import { IProduct } from "../interfaces/IProduct";

export class Product implements IProduct {
    constructor(data?: Partial<IProduct>) {
        Object.assign(this, data)
    }
    _id: { $oid: string | undefined; } | undefined;
    category: string | undefined;
    img1: string | undefined;
    img2: string | undefined;
    img3: string | undefined;
    img4: string | undefined;
    long_desc: string | undefined;
    name: string | undefined;
    price: string | number | undefined;
    short_desc: string | undefined;
}