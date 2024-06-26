//FooterLinks.tsx、FooterProducts.tsx 等：分别处理底部的链接、产品信息等细节内容。
import { siteConfig } from "@/config/site";
import Link from "next/link";

const FooterProducts = () => {
  const footerProducts = siteConfig.footerProducts;

  return (
    <div className="flex space-x-2 flex-wrap justify-center">
      {footerProducts.map((product, index) => {
        return (
          <span key={product.url}>
            <Link href={product.url} target="_blank">
              {product.name}
            </Link>
            {index !== footerProducts.length - 1 ? (
              <>
                <span>{" • "}</span>
              </>
            ) : (
              <></>
            )}
          </span>
        );
      })}
    </div>
  );
};

export default FooterProducts;
