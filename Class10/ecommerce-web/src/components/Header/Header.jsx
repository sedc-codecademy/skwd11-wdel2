import { Link, NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import "./Header.css";

export const Header = ({ cartListCount }) => {
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
    {
      to: "/cart",
      label: (
        <Badge badgeContent={cartListCount} color="primary">
          <ShoppingCartIcon />
        </Badge>
      ),
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
