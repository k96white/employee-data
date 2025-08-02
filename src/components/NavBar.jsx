import { Link , NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className='bg-gray-800 text-white p-4 rounded-lg shadow-md flex flex-row justify-around items-center h-15'>
        <div>
            <h1 className="text-2xl font-bold text-center">EmployeeData</h1>
        </div>
        <div className="flex justify-between w-30">
            <NavLink to="/" className="text-white hover:underline">
             <a href="/" >Home</a>
            </NavLink>
            <NavLink to="/about" className="text-white hover:underline">
            <a href="/about">About</a>
            </NavLink>
        </div>
    </nav>
  )
}

export default NavBar;