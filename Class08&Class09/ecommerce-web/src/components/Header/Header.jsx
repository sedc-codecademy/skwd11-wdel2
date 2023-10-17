import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const routes = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/about",
      label: "About",
    },
    {
      to: "/products",
      label: "Products",
    },
    {
      to: "/create-product",
      label: "Create Product",
    },
  ];

  return (
    <header>
      <nav className="navigation">
        <h3>LOGO</h3>
        <ul className="navLinks">
          {routes.map((route) => (
            <NavLink
              style={({ isActive }) => ({
                // css code here
                color: isActive ? "#d2fd78" : "white",
              })}
              key={route.label}
              to={route.to}
            >
              {route.label}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};
