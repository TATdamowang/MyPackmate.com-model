// app/[[...lang]]/trip-details.tsx

"use client"; // 确保这是一个客户端组件

import Header from "@/components/header/Header";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

export default function TripDetails() {
  const searchParams = useSearchParams();
  const currentLang = searchParams.get("lang") || defaultLocale;

  const [dict, setDict] = useState<any>({});

  useEffect(() => {
    // 异步加载语言字典
    const loadDictionary = async () => {
      const dictionary = await getDictionary(currentLang);
      setDict(dictionary);
    };

    loadDictionary();
  }, [currentLang]);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <Header /> {/* 使用现有的 Header 组件，包含语言切换逻辑 */}
        <main className="flex flex-col items-center justify-center py-10">
          <h1>{dict.TripDetailsTitle || "Trip Details"}</h1>
          <p>{dict.TripDetailsDescription || "Fill in your trip details below."}</p>
          {/* 旅行信息表单 */}
          <form className="space-y-4">
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                {dict.Destination || "Destination"}
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="purpose" className="block text-sm font-medium text-gray-700">
                {dict.Purpose || "Purpose"}
              </label>
              <input
                type="text"
                id="purpose"
                name="purpose"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                {dict.Date || "Date"}
              </label>
              <input
                type="date"
                id="date"
                name="date"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="mt-2 w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {dict.Submit || "Submit"}
            </button>
          </form>
        </main>
      </div>
    </Suspense>
  );
}
