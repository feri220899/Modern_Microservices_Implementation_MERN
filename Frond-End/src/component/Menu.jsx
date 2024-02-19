import { FaHome, FaFilter } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Menu({ expanded }) {
    const menuItems = [
        { to: "/app/home", icon: <FaHome />, label: "Home" },
        { to: "/app/about", icon: <FaFilter />, label: "About" },
    ];
    return (
        <div>
            {/* MENU SIDEBAR */}
            {menuItems.map((menuItem, index) => (
                <li key={index}>
                    <NavLink
                        to={menuItem.to}
                        className={({ isActive }) => `relative flex items-center ${expanded ? 'md:py-2 py-3 md:px-2 px-5' : 'py-3 px-5'} my-3 font-medium rounded-md cursor-pointer transition-colors 
                                        ${isActive
                                ? "bg-gradient-to-tr from-slate-100 to-indigo-100 text-black font-bold"
                                : "hover:bg-indigo-50 hover:text-black text-white font-bold"
                            }`}>
                        {menuItem.icon} <span className={expanded ? "md:w-52 w-0 ml-3 md:inline hidden" : "hidden"}>{menuItem.label}</span>
                    </NavLink>
                </li>
            ))}
        </div>
    );
}

export default Menu;
