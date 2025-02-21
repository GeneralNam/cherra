'use client'


import { useRouter } from 'next/navigation'

export default function Aproduct({ products }) {
    const router = useRouter()

    return (
        <div className="grid grid-cols-3 gap-6 w-full mx-auto">
            {products.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                    <div
                        className="aspect-[3/4] bg-[#ABABAB] flex flex-col justify-end items-center p-[2vw] cursor-pointer"
                        onClick={() => router.push(`/product-detail/${item.id}`)}
                    >

                    </div>
                    <div className="flex justify-between items-center w-full ">
                        <p className="text-[clamp(1rem,1vw,2rem)] font-bold">
                            {item.name}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}