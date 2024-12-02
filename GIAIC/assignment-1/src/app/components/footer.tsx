import Link from "next/link";
import FooterLinks from "./footerLinks";

const links = [
  {
    url: "#legal-terms",
    title: "Legal terms",
  },
  {
    url: "#privacy-policy",
    title: "Privacy Policy",
  },
];

const Footer = () => {
  return (
    <div className="px-3 py-5">
      <div className="container mx-auto flex  justify-around text-gray-400 ">
        <div className="left flex flex-wrap space-x-9 ">
          <h2 className="text-sm md:text-base">
            Copyright &copy; 2024 HR. Inc. All rights reserved
          </h2>
          <div className="policies space-x-4">
            {links.map((link) => (
              <FooterLinks link={link} key={link.title} />
            ))}
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center md:justify-end space-x-2 md:space-x-5">
          <p className="text-sm md:text-base">Pakistan</p>
          <p>
            <a
              href="/change-location"
              className="hover:text-white hover:underline"
            >
              Change Location
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
