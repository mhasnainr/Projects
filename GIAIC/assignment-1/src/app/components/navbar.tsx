import Link from "next/link";
import Image from "next/image";
import NavLinks from "./navLinks";

const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/shop",
    title: "Shop",
  },
  {
    url: "/support",
    title: "Support",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto flex items-center justify-around">
        <div className="logo text-2xl md:text-3xl lg:text-4xl text-orange-500 font-bold font-sans">
          <a href="/">HR. Laptops</a>
        </div>
        <div className="navbar hidden md:flex items-center space-x-9 font-semibold text-sm md:text-lg lg:text-xl text-white ">
          {links.map((link) => (
            <NavLinks link={link} key={link.title} />
          ))}
          <button className="bg-black text-orange-400 p-3 rounded-xl hover:bg-orange-400 hover:text-black ">
            Subscribe
          </button>
        </div>
        <div className="menu-option flex md:hidden cursor-pointer">
          <Image
            src={"/option.png"}
            alt={"hamburger menu"}
            width={20}
            height={1}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
