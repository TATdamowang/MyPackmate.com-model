
import LayoutPack from "@/components/trip-detail/LayoutPack";
import StorageSuggestions from "@/components/trip-detail/StorageSuggestions";
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
      <StorageSuggestions id="storageSuggestions" locale={dict.Trip} langName={langName} />
      
    </LayoutPack>
    </>
  );
}
