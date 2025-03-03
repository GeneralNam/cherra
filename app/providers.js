// app/providers.js
'use client';

import { useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import useAuthStore from '@/store/authStore';

export default function Providers({ children }) {
    useEffect(() => {
        // 현재 세션 확인
        const checkSession = async () => {
            const { data: { session }, error } = await createClient().auth.getSession();
            if (session) {
                // 로그인 상태 업데이트
                useAuthStore.setState({
                    user: session.user,
                    isLoggedIn: true
                });
            }
        };

        checkSession();

        // 인증 상태 변화 감지
        const { data: authListener } = createClient().auth.onAuthStateChange(
            (event, session) => {
                if (session) {
                    // 로그인 또는 세션 갱신 시
                    useAuthStore.setState({
                        user: session.user,
                        isLoggedIn: true
                    });
                } else {
                    // 로그아웃 시
                    useAuthStore.setState({
                        user: null,
                        isLoggedIn: false
                    });
                }
            }
        );

        // 컴포넌트 언마운트 시 리스너 정리
        return () => {
            if (authListener && authListener.subscription) {
                authListener.subscription.unsubscribe();
            }
        };
    }, []);

    return children;
}