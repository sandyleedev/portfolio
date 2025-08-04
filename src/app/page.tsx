import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <Button className="mt-4" variant="outline">✳️ Shadcn TEST!</Button>


        <Card className="hover:shadow-xl transition-shadow">
            <CardHeader className="flex flex-col items-start space-y-2">
                <div className="text-4xl">🍇</div>
                <CardTitle className="text-xl">Wishlist App</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground mb-2 text-sm">
                    Next.js 기반 위시리스트 공유 앱
                </p>
                <ul className="text-sm list-disc pl-4 space-y-1">
                    <li>OAuth 로그인</li>
                    <li>공유 가능한 링크 생성</li>
                    <li>반응형 UI</li>
                </ul>
            </CardContent>
        </Card>
    </div>
  );
}
