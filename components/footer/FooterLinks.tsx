//FooterLinks.tsx、FooterProducts.tsx 等：分别处理底部的链接、产品信息等细节内容。
import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";

const FooterLinks = () => {
  const links = siteConfig.footerLinks;

  return (
    <div className="mx-auto flex flex-row items-center pb-2">
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="mx-3 flex max-w-[24px] flex-col items-center justify-center"
        >
          {link.icon &&
            React.createElement(link.icon, { className: "text-lg" })}
        </Link>
      ))}
    </div>
  );
};

export default FooterLinks;
