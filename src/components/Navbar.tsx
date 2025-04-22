
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="w-full bg-white border-b border-gray-200 py-3 px-4 flex items-center justify-between mb-8 shadow-sm">
      <div className="font-extrabold text-2xl tracking-tight text-indigo-700">UserInfoApp</div>
      <div className="flex gap-4">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-3 py-2 rounded text-base font-medium transition-colors duration-150 ${
              location.pathname === item.path
                ? "bg-indigo-100 text-indigo-700"
                : "text-gray-600 hover:bg-gray-50 hover:text-indigo-700"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
