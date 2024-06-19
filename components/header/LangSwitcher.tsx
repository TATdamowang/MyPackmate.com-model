// components/header/LangSwitcher.tsx

"use client"; // 确保这是一个客户端组件

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { defaultLocale, localeNames } from "@/lib/i18n";
import { usePathname, useRouter } from "next/navigation";
import { Suspense } from "react";

export const LangSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = pathname.split("/")[1] || defaultLocale; // 从路径获取当前语言

  const handleSwitchLanguage = (newLang: string) => {
    let newPath;

    // 处理根路径或直接的语言路径
    if (pathname === "/" || pathname === `/${currentLang}`) {
      newPath = `/${newLang}`;
    } else {
      // 处理其他路径，例如 /trip-details
      newPath = pathname.replace(`/${currentLang}`, `/${newLang}`);
    }

    // 确保 URL 中保留新的语言参数
    router.push(`${newPath}?lang=${newLang}`);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Select value={currentLang} onValueChange={handleSwitchLanguage}>
        <SelectTrigger className="w-fit">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          {Object.keys(localeNames).map((key: string) => {
            const name = localeNames[key];
            return (
              <SelectItem className="cursor-pointer" key={key} value={key}>
                {name}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </Suspense>
  );
};
