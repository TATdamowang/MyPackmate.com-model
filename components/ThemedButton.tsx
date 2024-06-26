//ThemedButton.tsx、ThemeProvider.tsx：处理主题的组件和主题提供者。
"use client";
import PhMoonFill from "@/components/icons/moon";
import PhSunBold from "@/components/icons/sun";
import { useTheme } from "next-themes";

export function ThemedButton() {
  const { theme, setTheme } = useTheme();

  return (
    <div onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <PhMoonFill /> : <PhSunBold />}
    </div>
  );
}
