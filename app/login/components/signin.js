export default function SignIn() {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
                <p className="text-xl font-medium">이메일</p>
                <input className="w-full border-b-2 border-gray-400 bg-transparent text-md py-2" type="email" placeholder="이메일을 입력해주세요." />
            </div>

            <div className="flex flex-col gap-2">
                <p className="text-xl font-medium">비밀번호</p>
                <input className="w-full border-b-2 border-gray-400 bg-transparent text-md py-2" type="password" placeholder="비밀번호를 입력해주세요." />
            </div>

            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="w-4 h-4" />
                    <span className="text-md text-gray-600">로그인 정보 저장</span>
                </div>
                <button className="text-gray-600 text-md">비밀번호 찾기</button>
            </div>

            <button className="w-full aspect-[8/1] bg-black text-white text-xl rounded-md">
                로그인
            </button>
        </div>
    )
}
