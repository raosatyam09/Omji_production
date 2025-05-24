

import { NavLink } from 'react-router-dom';
import { useLocation} from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  
  const location = useLocation();
  const isHome = location.pathname === "/";



  return (
    <header className={ `w-full ${ isHome ? "bg-transparent fixed top-0 left-0  z-50" : " bg-[#111] relative "} text-white px-6 py-4`}>
      <nav className ="flex items-center justify-between p-4 border-2  border-blue-600 mt-4 rounded-full mx-auto w-lg space-x-2">
      
      {/* logo section  */}
   
   <div className="flex items-center">
    <img src= {logo} alt='logo' className="h-16 w-16 rounded-full"/>
   </div>
 
      <NavLink to="/" className={({ isActive }) => isActive ? "text-red-400 font-bold" : "text-xl font-bold cursor-pointer hover:text-red-400 transition-colors duration-300"}>Home</NavLink>
      <NavLink to="/movies" className={({ isActive }) => isActive ? "text-red-400 font-bold " :"text-xl font-bold cursor-pointer hover:text-red-400 transition-colors duration-300"}>Movies</NavLink>
      <NavLink to="/music" className={({ isActive }) => isActive ? "text-red-400 font-bold" :"text-xl font-bold cursor-pointer hover:text-red-400 transition-colors duration-300"}>Music</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? "text-red-400 font-bold" :"text-xl font-bold cursor-pointer hover:text-red-400 transition-colors duration-300"}>About</NavLink>
      <NavLink to="/career" className={({ isActive }) => isActive ? "text-red-400 font-bold" :"text-xl font-bold cursor-pointer hover:text-red-400 transition-colors duration-300"}>Career</NavLink>
      </nav>
    </header>
  );
};
export default Navbar;
