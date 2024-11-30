import Link from "next/link";
import NavLinks from "./navLinks";

const links = [
  { url: "/", title: "Home" },
  { url: "/about", title: "About" },
  { url: "/products", title: "Products" },
  { url: "/services", title: "Services" },
  { url: "/contact", title: "Contact" },
];

const Navbar = () => {
  return (
    <div className="p-4">
      <div className="container mx-auto flex items-center justify-around">
        <div className="logo text-xl md:text-3xl font-semibold">
          <a href="#">Logo</a>
        </div>
        <div className="navbar hidden md:flex items-center space-x-9">
          {links.map((link) => (
            <NavLinks link={link} key={link.title} />
          ))}
          <button className="bg-black text-orange-400 hover:text-black hover:bg-orange-400 font-semibold p-3 rounded-xl">
            Subscribe
          </button>
        </div>

        <div className="menu-option flex md:hidden cursor-pointer">
          <img src="/menu.png" alt="" className="w-5" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
