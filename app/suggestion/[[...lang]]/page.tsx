import LayoutPack from "@/components/trip-detail/LayoutPack";
import Suggestions from "@/components/trip-detail/suggestion";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function TripDetail({
  params: { lang },
}: {
  params: { lang: string };
}) {
  let langName =
    lang && lang[0] && lang[0] !== "index" ? lang[0] : defaultLocale;

  const dict = await getDictionary(langName);

  return (
    <>
      <LayoutPack>
        {/* 其他主页内容 */}
        {/* StorageSuggestions */}
        <Suggestions id="Suggestions" locale={dict.suggestion} apiEndpoint="/api/upload" />
      </LayoutPack>
    </>
  );
}
