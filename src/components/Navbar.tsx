import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between width-full rounded-lg w-5/6 bg-white py-4 mb-5 px-12">
      <Link to="/" className="italic">
        <h4 className="cursor-pointer text-xl font-bold">Store</h4>
      </Link>
      <h4 className="cursor-pointer text-l font-bold">Register</h4>
    </div>
  );
};

export default Navbar;
