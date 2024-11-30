import Link from "next/link";
import FootLinks from "./footLinks";

const links = [
  { url: "/", title: "" },
  { url: "/privacy-policy", title: "Privacy Policy" },
  { url: "/terms-of-service", title: "Terms of Service" },
  { url: "/contact", title: "Contact" },
];

const Footer = () => {
  return (
    <div className="px-2 py-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="policies space-x-5">
          {links.map((link) => (
            <FootLinks link={link} key={link.title} />
          ))}
        </div>
        <div className="note mt-3">
          <h2>All Rights Reserved &#174;</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
