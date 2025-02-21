'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";
import SignIn from "./components/signin";
import SignUp from "./components/signup";

export default function Login() {

    const router = useRouter();
    const [isSignIn, setIsSignIn] = useState(true);

    return (
        <div className="w-full flex justify-center items-center py-10 ">
            <div className="w-fit flex flex-col gap-10">
                <h1 className="text-xl font-medium">CHERRA는 우아함을 최고 가치로 여깁니다.</h1>

                <div className="flex flex-col ">
                    <div className="flex justify-between items-center">
                        <div className="w-1/2 aspect-[4/1] flex flex-col relative justify-center items-center " onClick={() => setIsSignIn(true)}>
                            <p className="text-xl font-medium">로그인</p>
                        </div>
                        <div className="w-1/2 aspect-[4/1] flex flex-col relative justify-center items-center " onClick={() => setIsSignIn(false)}>
                            <p className="text-xl font-medium">회원가입</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="w-full h-[2px] bg-black rounded-full"></div>
                        <div className="w-full h-[1px] bg-gray-400 rounded-full"></div>
                    </div>
                </div>

                {isSignIn ? <SignIn /> : <SignUp />}
            </div>
        </div>
    )
}