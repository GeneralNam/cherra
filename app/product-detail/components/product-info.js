'use client'

import { ShoppingBag } from 'lucide-react'
import QuantityButton from './quantity-button'

export default function ProductInfo({ product }) {

    const fontBold = ""

    return (
        <div className="w-1/2">
            <div className="flex relative flex-col aspect-[3/4] gap-[2vw]">
                <h1 className={`text-[clamp(1rem,2vw,2rem)] font-bold`}>{product.name}</h1>

                <div className="flex flex-col gap-[1.5vw] overflow-y-auto">
                    <div className="flex flex-col gap-[0.5vw]">
                        <h2 className={`text-[clamp(0.875rem,1.2vw,1.5rem)] ${fontBold}`}>Color</h2>
                        <p className="text-gray-500 text-[clamp(0.5rem,1vw,1.25rem)]">Black</p>
                    </div>
                    <div className="flex flex-col gap-[0.5vw]">
                        <h2 className={`text-[clamp(1rem,1.2vw,1.5rem)] ${fontBold}`}>Size</h2>
                        <p className="text-gray-500 text-[clamp(0.5rem,1vw,1.25rem)]">
                            H: 96cm<br />W: 60cm
                        </p>
                    </div>
                    <div className="flex flex-col gap-[0.5vw]">
                        <h2 className={`text-[clamp(1rem,1.2vw,1.5rem)] ${fontBold}`}>Features</h2>
                        <p className="text-gray-500 text-[clamp(0.5rem,1vw,1.25rem)]">
                            초발수 원단으로 물을 튕겨내어 불편함을 해소하고 녹을 방지합니다.<br />
                            탄소섬유로 이루어진 우산대로 경량화된 무게를 자랑합니다.<br />
                            자외선을 95% 이상 차단하여 피부 노화를 예방합니다.
                        </p>
                    </div>
                    <div className="flex flex-col gap-[0.5vw]">
                        <h2 className={`text-[clamp(1rem,1.2vw,1.5rem)] ${fontBold}`}>Quantity</h2>
                        <QuantityButton />
                    </div>
                </div>

                <div className="flex flex-col absolute bottom-0 left-0 right-0 gap-[0.75vw]">
                    <div className="flex justify-start gap-[10vw]">
                        <h2 className={`text-[clamp(1rem,1.2vw,1.5rem)] font-bold`}>Total</h2>
                        <h2 className={`text-[clamp(1rem,1.2vw,1.5rem)] font-bold`}>38,200 KRW</h2>
                    </div>
                    <div className="flex justify-start gap-[1vw]">
                        <button className="bg-black text-white px-[2vw] py-[1vw] rounded-md w-1/2 text-[clamp(0.875rem,1vw,1.25rem)]">
                            SHOP
                        </button>
                        <button className="bg-black text-white px-[2vw] py-[1vw] rounded-md">
                            <ShoppingBag className="w-[clamp(1rem,1.2vw,1.5rem)] h-[clamp(1rem,1.2vw,1.5rem)]" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}