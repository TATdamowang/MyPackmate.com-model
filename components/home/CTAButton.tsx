"use client";

import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const CTAButton = ({ locale }: { locale: any }) => {
  const pathname = usePathname();

  // 获取当前语言参数
  const lang = pathname.split('/')[1]; // 假设语言参数是路径的一部分

  // 动态生成目标链接，根据当前语言
  const targetLink = lang ? `/trip/${lang}` : "/trip";

  return (
    <Link href={targetLink} target="_blank" rel="noopener noreferrer nofollow">
      <Button
        variant="default"
        className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white"
        aria-label="Get Boilerplate"
      >
        <RocketIcon />
        {locale.title}
      </Button>
    </Link>
  );
};

export default CTAButton;
