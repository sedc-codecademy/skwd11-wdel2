import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  const welcomingMessage = "Website Title";

  const contactRoute = "/contact";

  return (
    <header>
      <nav className="navigation">
        <h3>{welcomingMessage}</h3>

        <ul className="navLinks">
          {/* THIS IS BAD!!! */}
          {/* <a href="/">
            <li>Home</li>
          </a>

          <a href="/about">
            <li>About</li>
          </a>

          <a href="/contact">
            <li>Contact</li>
          </a> */}

          {/* BETTER WAY ! =) */}
          <Link to="/">
            <li>Home</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to={contactRoute}>
            <li>Contact</li>
          </Link>

          <Link to="/counter">
            <li>Counter</li>
          </Link>

          <Link to="/create-task">
            <li>Create Task</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};
