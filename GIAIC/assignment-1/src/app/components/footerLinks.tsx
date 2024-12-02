"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  link: {
    url: string;
    title: string;
  };
}
const FooterLinks = ({ link }: LinkProps) => {
  const pathName = usePathname();
  return (
    <Link className="hover:text-white hover:underline" href={link.url}>
      {link.title}
    </Link>
  );
};

export default FooterLinks;
