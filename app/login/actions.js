'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData) {
    const supabase = await createClient()

    // 입력 값 가져오기
    const email = formData.get('email')
    const password = formData.get('password')

    // 기본적인 유효성 검사
    if (!email || !password) {
        return {
            error: '이메일과 비밀번호를 모두 입력해주세요.',
            success: false
        }
    }

    const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
    })

    if (error) {
        console.error('로그인 오류:', error.message)

        // 오류 유형에 따른 메시지 처리
        let errorMessage = '로그인에 실패했습니다.'

        if (error.message.includes('Invalid login credentials')) {
            errorMessage = '이메일 또는 비밀번호가 올바르지 않습니다.'
        } else if (error.message.includes('Email not confirmed')) {
            errorMessage = '이메일 인증이 완료되지 않았습니다. 이메일을 확인해주세요.'
        }

        return {
            error: errorMessage,
            success: false
        }
    }

    // 로그인 성공
    revalidatePath('/', 'layout')
    redirect('/')
}

export async function signup(formData) {
    const supabase = await createClient()

    // 입력 값 가져오기
    const email = formData.get('email')
    const password = formData.get('password')

    // 기본적인 유효성 검사
    if (!email || !password) {
        return {
            error: '이메일과 비밀번호를 모두 입력해주세요.',
            success: false
        }
    }

    // 비밀번호 강도 검사 (선택사항)
    if (password.length < 6) {
        return {
            error: '비밀번호는 최소 6자 이상이어야 합니다.',
            success: false
        }
    }

    const { error, data } = await supabase.auth.signUp({
        email,
        password,
        options: {
            emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
        }
    })

    if (error) {
        console.error('회원가입 오류:', error.message)

        // 오류 유형에 따른 메시지 처리
        let errorMessage = '회원가입에 실패했습니다.'

        if (error.message.includes('already registered')) {
            errorMessage = '이미 등록된 이메일 주소입니다.'
        } else if (error.message.includes('password')) {
            errorMessage = '비밀번호가 요구사항을 충족하지 않습니다. 다른 비밀번호를 사용해주세요.'
        }

        return {
            error: errorMessage,
            success: false
        }
    }

    // 회원가입 성공
    return {
        success: true,
        message: '회원가입이 완료되었습니다. 이메일 인증을 확인해주세요.'
    }
}