import NavLinks from "./links/NavLinks";

const Navbar = () => {
  return (
    <div className="flex w-full justify-between my-8 px-16 border border-white">
      <div>Logo</div>
      <div className="">
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
