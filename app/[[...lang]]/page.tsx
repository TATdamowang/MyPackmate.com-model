import CTA from "@/components/home/CTA";
import FAQ from "@/components/home/FAQ";
import Feature from "@/components/home/Feature";
import Hero from "@/components/home/Hero";
import Pricing from "@/components/home/Pricing";
import ScrollingLogos from "@/components/home/ScrollingLogos";
import SocialProof from "@/components/home/SocialProof";
import WallOfLove from "@/components/home/WallOfLove";
import { defaultLocale, getDictionary } from "@/lib/i18n";

export default async function LangHome({
  params: { lang },
}: {
  params: { lang: string };
}) {
  let langName =
    lang && lang[0] && lang[0] !== "index" ? lang[0] : defaultLocale;

  const dict = await getDictionary(langName);

  return (
    <>
      <Hero locale={dict.Hero} CTALocale={dict.CTAButton} />
      <SocialProof locale={dict.SocialProof} />
      <ScrollingLogos />
      <Feature id="Features" locale={dict.Feature} langName={langName} />
      <Pricing id="Pricing" locale={dict.Pricing} langName={langName} />
      <WallOfLove id="WallOfLove" locale={dict.WallOfLove} />
      <FAQ id="FAQ" locale={dict.FAQ} langName={langName} />
      <CTA locale={dict.CTA} CTALocale={dict.CTAButton} />
    </>
  );
}
