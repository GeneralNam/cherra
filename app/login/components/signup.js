export default function SignUp() {
    return (
        <div className="w-full min-h-screen flex justify-center items-center py-10">
            <div className="w-full max-w-4xl px-4">


                {/* 폼 영역 */}
                <div className="grid grid-cols-2 gap-8">
                    {/* 왼쪽: 기본 정보 */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-lg font-medium">기본 정보</h2>

                        <div className="flex flex-col gap-4">
                            <input
                                type="email"
                                placeholder="이메일*"
                                className="w-full border-b border-gray-300 py-2 focus:outline-none"
                            />
                            <div className="flex flex-col gap-1">
                                <input
                                    type="password"
                                    placeholder="비밀번호*"
                                    className="w-full border-b border-gray-300 py-2 focus:outline-none"
                                />
                                <p className="text-xs text-gray-500">(영문/숫자/특수문자 포함하여 8자 이상)</p>
                            </div>
                            <input
                                type="password"
                                placeholder="비밀번호 확인*"
                                className="w-full border-b border-gray-300 py-2 focus:outline-none"
                            />
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="휴대폰 번호*"
                                    className="flex-1 border-b border-gray-300 py-2 focus:outline-none"
                                />
                                <button className="px-4 py-2 bg-black text-white text-sm">
                                    인증번호 받기
                                </button>
                            </div>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="인증번호*"
                                    className="flex-1 border-b border-gray-300 py-2 focus:outline-none"
                                />
                                <button className="px-4 py-2 bg-black text-white text-sm">
                                    인증
                                </button>
                            </div>
                            <select className="w-full border-b border-gray-300 py-2 focus:outline-none">
                                <option value="">성별*</option>
                                <option value="male">남성</option>
                                <option value="female">여성</option>
                            </select>
                        </div>
                    </div>

                    {/* 오른쪽: 배송지 정보 */}
                    <div className="flex flex-col gap-6">
                        <h2 className="text-lg font-medium">배송지 정보</h2>

                        <div className="flex flex-col gap-4">
                            <input
                                type="text"
                                placeholder="이름*"
                                className="w-full border-b border-gray-300 py-2 focus:outline-none"
                            />
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="우편번호*"
                                    className="flex-1 border-b border-gray-300 py-2 focus:outline-none"
                                    readOnly
                                />
                                <button className="px-4 py-2 bg-black text-white text-sm">
                                    우편번호 찾기
                                </button>
                            </div>
                            <input
                                type="text"
                                placeholder="주소*"
                                className="w-full border-b border-gray-300 py-2 focus:outline-none"
                                readOnly
                            />
                            <input
                                type="text"
                                placeholder="상세주소*"
                                className="w-full border-b border-gray-300 py-2 focus:outline-none"
                            />

                            {/* 체크박스 그룹 */}
                            <div className="flex flex-col gap-2 mt-4">
                                <label className="flex items-center gap-2">
                                    <input type="checkbox" className="w-4 h-4" />
                                    <span>전체 동의</span>
                                </label>
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="w-4 h-4" />
                                        <span>이용약관</span>
                                    </label>
                                    <button className="text-sm text-gray-500">자세히 보기</button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="w-4 h-4" />
                                        <span>개인정보</span>
                                    </label>
                                    <button className="text-sm text-gray-500">자세히 보기</button>
                                </div>
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" className="w-4 h-4" />
                                        <span>마케팅 수신</span>
                                    </label>
                                    <button className="text-sm text-gray-500">자세히 보기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 가입하기 버튼 */}
                <button className="w-full bg-black text-white py-4 mt-12">
                    가입하기
                </button>
            </div>
        </div>
    )
}