// app/login/page.jsx 또는 app/auth/login/page.jsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signInWithEmail } from '../actions';
import useAuthStore from '@/store/authStore';

export default function SigninPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const { data } = await signInWithEmail({ email, password });
            console.log('로그인 성공:');
            useAuthStore.setState({
                user: data.user,
                isLoggedIn: true
            });
            // 로그인 성공 후 홈페이지로 리다이렉트
            router.push('/'); // 원하는 경로로 변경 가능
        } catch (err) {
            console.error('로그인 실패:', err.message);
        }
        // router.push('/dashboard');
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                        이메일
                    </label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="이메일 주소를 입력하세요."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium">
                        비밀번호
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="비밀번호를 입력하세요."
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                        required
                    />
                </div>

                <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                        <input
                            id="remember"
                            type="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="w-4 h-4 border-gray-300 rounded focus:ring-black text-black"
                        />
                        <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                            로그인 정보 저장
                        </label>
                    </div>
                    <Link href="/login/resetpassword" className="text-sm text-gray-700 hover:underline">
                        비밀번호 초기화
                    </Link>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                    로그인
                </button>
                <Link href="/login/signup" className="text-sm text-gray-700 hover:underline">
                    회원가입
                </Link>
            </form>
        </div>
    );
}