import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="relative flex items-center bg-black text-white h-16 px-10">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/" className="text-2xl font-bold">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
        </Link>
      </div>
      <div className="flex items-center ml-auto gap-4">
        <Link href="/product" className="text-sm">PRODUCT</Link>
        <Link href="/cart" className="text-sm">CART</Link>
        <Link href="/login" className="text-sm">LOGIN</Link>
      </div>
    </nav>
  )
}