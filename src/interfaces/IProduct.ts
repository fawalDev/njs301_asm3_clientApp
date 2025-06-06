
export interface IProduct {
    _id?: {
        $oid?: string
    }
    category?: string
    img1?: string
    img2?: string
    img3?: string
    img4?: string
    long_desc?: string
    name?: string
    price?: string | number
    short_desc?: string
}