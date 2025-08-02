import { Link, NavLink } from "react-router-dom";
import employeeImg from "../assets/employee.png";
const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 rounded-lg shadow-md flex flex-row justify-around items-center h-15">
      <div className="flex items-center">
        <img
          src={employeeImg}
          alt="logo"
          className="w-10 h-10 inline-block mr-2"
        />
        <h1 className="text-2xl font-bold text-center">EmployeeData</h1>
      </div>
      <div className="flex justify-between w-30">
        <NavLink to="/" className="text-white hover:underline">
          Home
        </NavLink>
        <NavLink to="/about" className="text-white hover:underline">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
