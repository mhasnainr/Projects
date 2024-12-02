"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkProps {
  link: {
    url: string;
    title: string;
  };
}

const NavLinks = ({ link }: LinkProps) => {
  const pathName = usePathname();
  return (
    <Link className="hover:text-orange-400" href={link.url}>
      {link.title}
    </Link>
  );
};

export default NavLinks;
