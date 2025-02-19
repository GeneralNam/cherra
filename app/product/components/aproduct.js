'use client'

import { ShoppingBag } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function Aproduct({products}) {
    const router = useRouter()
    
    return (
        <div className="grid grid-cols-3 gap-6">
            {products.map((item, index) => (
                <div key={index} 
                    className="aspect-square bg-gray-400 flex flex-col justify-end items-center p-4 cursor-pointer" 
                    onClick={() => router.push(`/product-detail/${item.id}`)}>
                    <div className="flex justify-center gap-28">
                        <p className="text-2xl font-bold">{item.name}</p>
                        <div className="flex gap-4">
                            <div className="bg-gray-200 p-2 rounded-sm">
                                <p className="font-bold">SHOP</p>
                            </div>
                            <div className="bg-gray-200 p-2 rounded-sm">
                                <ShoppingBag />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}