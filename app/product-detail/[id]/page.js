import { ShoppingBag } from 'lucide-react'

export default async function ProductDetail({params}) {
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
        <div className="flex px-52 py-32 gap-10">

            <div className="w-1/2 aspect-square rounded-sm bg-gray-400"></div>

            <div className="w-1/2 aspect-square flex flex-col gap-12">
                <h1 className="text-3xl font-bold">{product.name}</h1>

                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-bold">Color</h2>
                        <p className="text-gray-500">Black</p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-bold">Size</h2>
                        <p className="text-gray-500">H : 96cm<br></br>W : 60cm </p>
                        
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-bold">Features</h2>
                        <p className="text-gray-500">초발수 원단으로 물을 튕겨내어 불폄함을 해소하고 녹을 방지합니다.<br></br>탄소섬유로 이루어진 우산대로 경량화된 무게를 자랑합니다.<br></br>자외선을 95%이상 차단하여 피부 노화를 예방합니다.
                        </p>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h2 className="text-lg font-bold">Quantity</h2>
                        <p className="text-gray-500">1</p>

                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-start gap-36">
                        <h2 className="text-lg font-bold">Total</h2>
                        <h2 className="text-lg font-bold">38,200 KRW</h2>
                    </div>
                    <div className="flex justify-start gap-4">
                        <button className="bg-black text-white px-4 py-2 rounded-md w-1/2">SHOP</button>
                        <button className="bg-black text-white px-4 py-2 rounded-md">
                            <ShoppingBag />
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
  