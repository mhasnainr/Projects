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
    <div className="">
      <div className="container mx-auto p-4 flex items-center justify-around">
        <div className="logo">
          <a href="#">Logo</a>
        </div>
        <div className="navbar">
          {links.map((link) => (
            <NavLinks link={link} key={link.title} />
          ))}
          <div className="btn">
            <button>
              <a href="#">Login</a>
            </button>
            <button>
              <a href="#">Join Us</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
