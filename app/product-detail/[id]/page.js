import ProductInfo from "../components/product-info"
import Pics from "../components/pics"

export default async function ProductDetail({ params }) {
    // searchParams와 params는 서버 컴포넌트에서 async로 처리
    const { id } = await params;

    let products = [
        {
            id: 1,
            name: "CHERRA BLACK",
        },
        {
            id: 2,
            name: "CHERRA BROWN",
        },
        {
            id: 3,
            name: "CHERRA KHAKI",
        },
    ]

    const product = products.find(product => Number(product.id) === Number(id))

    if (!product) return <div>상품을 찾을 수 없습니다.</div>

    return (
        <div className="flex px-[clamp(2rem,10vw,13rem)] py-[clamp(4rem,14vh,10rem)] gap-[clamp(1rem,8vw,10rem)] w-full max-w-[90rem] mx-auto">
            <Pics />
            <ProductInfo product={product} />
        </div>
    )
}
