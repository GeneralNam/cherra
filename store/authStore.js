// store/authStore.js
import { create } from 'zustand';
import { createClient } from '@/utils/supabase/client';

// 인증 스토어 생성
const useAuthStore = create((set) => ({
    user: null,
    loading: true,
    isLoggedIn: false,


    // 로그인 함수
    login: async (email, password) => {
        try {
            set({ loading: true });
            const { data: { user, session }, error } = await createClient().auth.signInWithPassword({
                email,
                password,
            });

            if (error) throw error;

            return { success: true };
        } catch (error) {
            console.error('로그인 오류:', error);
            return { success: false, error: error.message };
        } finally {
            set({ loading: false });
        }
    },

    // 로그아웃 함수
    logout: async () => {
        try {
            set({ loading: true });
            const { error } = await createClient().auth.signOut();
            if (error) throw error;

            return { success: true };
        } catch (error) {
            console.error('로그아웃 오류:', error);
            return { success: false, error: error.message };
        } finally {
            set({ loading: false });
        }
    },
}));

export default useAuthStore;