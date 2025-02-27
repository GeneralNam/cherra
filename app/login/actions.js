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
    const supabase = createClient()
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    })
}
