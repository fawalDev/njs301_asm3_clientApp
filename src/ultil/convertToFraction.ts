
export default function convertToFraction(price: string | number | undefined) {
    return String(price)?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
} 