// app/auth/auth-code-error/page.tsx
export default function AuthCodeErrorPage() {
    return (
        <div className="container mx-auto py-8">
            <h1 className="text-2xl font-bold mb-4">인증 오류</h1>
            <p className="mb-4">
                인증 코드 검증에 실패했습니다. 다음과 같은 이유가 있을 수 있습니다:
            </p>
            <ul className="list-disc pl-5 mb-4">
                <li>인증 링크가 만료되었습니다</li>
                <li>인증 링크가 이미 사용되었습니다</li>
                <li>잘못된 URL을 사용하고 있습니다</li>
            </ul>
            <div>
                <a
                    href="/login"
                    className="text-blue-600 hover:underline"
                >
                    로그인 페이지로 돌아가기
                </a>
            </div>
        </div>
    );
}