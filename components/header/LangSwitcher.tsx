"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams, useRouter } from "next/navigation";
import { defaultLocale, localeNames } from "@/lib/i18n";

export const LangSwitcher = () => {
  const params = useParams();
  const lang = params.lang;
  const router = useRouter();

  let langName = lang && lang[0] && lang[0] !== "index" ? lang[0] : defaultLocale;

  const handleSwitchLanguage = (value: string) => {
    const currentPath = window.location.pathname;

    if (value === defaultLocale) {
      if (currentPath.startsWith('/trip')) {
        router.push('/trip');
      } else if (currentPath.startsWith('/suggestion')) {
        router.push('/suggestion');
      } else {
        router.push('/');
      }
      return;
    }
  
    if (currentPath.startsWith('/trip')) {
      router.push(`/trip/${value}`);
    } else if (currentPath.startsWith('/suggestion')) {
      router.push(`/suggestion/${value}`);
    } else {
      router.push(`/${value}`);
    }
    
  };
  

  return (
    <Select value={langName} onValueChange={handleSwitchLanguage}>
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
  );
};
