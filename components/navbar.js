'use client'

import Link from 'next/link'
import Image from 'next/image'
import useAuthStore from '@/store/authStore'
import { useRouter } from 'next/navigation'

export default function Navbar() {

  const { isLoggedIn, logout } = useAuthStore()
  const router = useRouter()
  // 로그아웃 핸들러
  const handleLogout = async () => {
    const result = await logout();

    if (result.success) {
      router.push('/')
      console.log('로그아웃 성공');
    }
  };



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

        {isLoggedIn ? (
          <>
            <Link href="/private" className="text-sm">
              PRIVATE
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm"
            >
              LOGOUT
            </button>
          </>
        ) : (
          <Link href="/login/signin" className="text-sm">
            LOGIN
          </Link>
        )}


      </div>
    </nav>
  )
}