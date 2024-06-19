// components/home/CTAButton.tsx

"use client"; // 确保这是一个客户端组件

import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const CTAButton = ({ locale }: { locale: any }) => {
  const searchParams = useSearchParams();
  const lang = searchParams.get("lang") || "en"; // 默认语言为英文

  // 构造跳转的 URL，包含当前语言
  const href = `/${lang}/trip-details?lang=${lang}`;

  console.log("Generated URL in CTAButton:", href); // 调试输出，检查生成的 URL

  return (
    <Link href={href}>
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Get Started"
      >
        <RocketIcon />
        {locale.title || "开始打包"} {/* 使用本地化文本，或者使用默认值 */}
      </Button>
    </Link>
  );
};

export default CTAButton;
