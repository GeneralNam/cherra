// app/login/page.jsx 또는 app/auth/login/page.jsx
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { updatePassword } from '@/app/login/actions';

export default function UpdatePasswordPage() {
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password.length < 6) {
            setMessage('비밀번호는 최소 6자 이상이어야 합니다');
            return;
        }

        try {
            await updatePassword(password);
            setMessage('비밀번호가 성공적으로 변경되었습니다');
            setTimeout(() => {
                router.push('/login/signin');
            }, 2000);
        } catch (err) {
            setMessage('비밀번호 변경에 실패했습니다');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">새 비밀번호 설정</h1>

            {message && (
                <div className="mb-4 p-3 bg-blue-100 text-blue-800 rounded">
                    {message}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="password" className="block mb-2 text-sm font-medium">
                        새 비밀번호
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="새 비밀번호를 입력하세요"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-3 px-4 bg-black text-white font-medium rounded-md"
                >
                    비밀번호 변경
                </button>
            </form>
        </div>
    );
}