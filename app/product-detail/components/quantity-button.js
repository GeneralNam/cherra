
'use client'

import { useState } from 'react'

export default function QuantityButton() {

    const [quantity, setQuantity] = useState(1)

    return (
        <div className="flex items-center gap-2">
            <button onClick={() => {
                if (quantity > 1) setQuantity(quantity - 1)
            }}>{'<'}</button>
            <p>{quantity}</p>
            <button onClick={() => setQuantity(quantity + 1)}>{'>'}</button>
        </div>
    )
}