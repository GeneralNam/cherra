'use client'

import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Aproduct({ products }) {
    const router = useRouter()
    
    return (
        <div className="grid grid-cols-3 gap-6 w-full mx-auto">
            {products.map((item, index) => (
                <div 
                    key={index} 
                    className="aspect-square bg-gray-400 flex flex-col justify-end items-center p-[2vw] cursor-pointer" 
                    onClick={() => router.push(`/product-detail/${item.id}`)}
                >
                    <div className="flex justify-between items-center w-full ">
                        <p className="text-[clamp(1rem,1.5vw,2rem)] font-bold">
                            {item.name}
                        </p>
                        <div className="flex gap-[1vw]">
                            <div className="bg-gray-200 p-[0.5vw] rounded-sm">
                                <p className="font-bold text-[clamp(0.75rem,1vw,1.25rem)]">
                                    SHOP
                                </p>
                            </div>
                            <div className="bg-gray-200 p-[0.5vw] rounded-sm">
                                <ShoppingBag size="clamp(16px, 1.5vw, 24px)" />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}