
import ProductInfo from "@/app/components/ProductInfo";
import { Product } from "@/app/interfaces/product.interface";
import { Metadata } from "next";

type Props = {
    params: Promise<{ id: string }>
}

export async function generateMetadata(
    { params }: Props
): Promise<Metadata> {
    // read route params
    const id = (await params).id;
    // fetch data
    const product: Product = await fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())

    return {
        title: product.title,
        description: product.description,
    }
}

export default function Home({ params }: Props) {
    generateMetadata({params});
    
    return (
        <>
            <ProductInfo />
        </>
    )
}