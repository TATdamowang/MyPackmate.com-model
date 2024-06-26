//components存放所有 React 组件的目录，各个组件被分组存放在不同的子目录中，以提高组织性。
//footer/：存放页面底部（footer）的组件。
//Footer.tsx：主页面底部组件，包含整个页面的底部内容。
import FooterLinks from "@/components/footer/FooterLinks";
import FooterProducts from "@/components/footer/FooterProducts";
import LangLinks from "@/components/footer/LangLinks";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const { authors } = siteConfig;

  return (
    <footer>
      <div className="mt-16 space-y-2 pt-6 pb-4 flex flex-col items-center bg-black text-sm text-gray-400 border-t">
        <FooterLinks />
        <FooterProducts />
        <LangLinks />
        <div className="flex space-x-2">
          <div>{`©${currentYear}`}</div>{" "}
          <Link href={authors[0].twitter || authors[0].url} target="_blank">
            {authors[0].name}
          </Link>{" "}
          <div>All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
