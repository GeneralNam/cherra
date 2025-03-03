// app/login/page.jsx 또는 app/auth/login/page.jsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { resetPassword } from '../actions';
import useAuthStore from '@/store/authStore';

export default function ResetPasswordPage() {
    const [email, setEmail] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log('이메일:', email);
            await resetPassword(email);
            console.log('비밀번호 초기화 이메일 보냄:');
            // 로그인 성공 후 홈페이지로 리다이렉트
            router.push('/'); // 원하는 경로로 변경 가능
        } catch (err) {
            console.error('비밀번호 초기화 실패:', err.message);
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


                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-black text-white font-medium rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                    비밀번호 초기화 이메일 발송
                </button>

            </form>
        </div>
    );
}