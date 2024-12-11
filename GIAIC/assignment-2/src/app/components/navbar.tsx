import NavLinks from "./navLinks";

const links = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/product",
    title: "Product",
  },
  {
    url: "/pricing",
    title: "Pricing",
  },
  {
    url: "/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  return (
    <div className="container mx-auto p-4 flex items-center justify-around">
      <div className="logo text-white font-bold text-3xl">
        <a href="#">Logo</a>
      </div>
      <div className="md:flex hidden navbar space-x-6 font-semibold text-white text-xl">
        {links.map((link) => (
          <NavLinks link={link} key={link.title} />
        ))}
      </div>
      <div className="md:flex hidden space-x-11 font-semibold text-white text-lg">
        <button>
          <a href="#">Login</a>
        </button>
        <button className="bg-blue-400 p-3 px-5  rounded-s">
          <a href="#">JOIN US</a>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
