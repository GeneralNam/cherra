'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function signUpNewUser({ email, password }) {
    const supabase = createClient()
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            emailRedirectTo: 'http://localhost:3000/login/signin',
        },
    })
}


export async function signInWithEmail({ email, password }) {
    const supabase = await createClient();
    console.log('Supabase auth 확인:');

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error('Supabase 로그인 에러:', error.message);
            throw new Error(error.message);
        }

        console.log('로그인 성공임 ㅊㅊ:');
        return { data };
    } catch (err) {
        console.error('로그인 시도 중 예외 발생:', err.message);
        throw err;
    }
}

export async function resetPassword(email) {
    const supabase = await createClient()
    const { data, error } = await supabase.auth.resetPasswordForEmail(email)

}

export async function updatePassword(new_password) {
    const supabase = await createClient()
    await supabase.auth.updateUser({ password: new_password })
}

