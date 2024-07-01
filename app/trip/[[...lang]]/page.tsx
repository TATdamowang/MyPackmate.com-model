
import LayoutPack from "@/components/trip-detail/LayoutPack";
<<<<<<< HEAD
import StorageSuggestions from "@/components/trip-detail/StorageSuggestions";
=======
import ImageUploadWithAPI from "@/components/trip-detail/ImageUploadWithAPI";
>>>>>>> 45ecfca (Your commit message)
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
<<<<<<< HEAD
      <StorageSuggestions id="storageSuggestions" locale={dict.Trip} langName={langName} />
=======
      <ImageUploadWithAPI id="ImageUploadWithAPI" locale={dict.Trip} langName={langName} />
>>>>>>> 45ecfca (Your commit message)
      
    </LayoutPack>
    </>
  );
}
