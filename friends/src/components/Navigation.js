import React from "react";
import { NavLink } from "react-router-dom";

const styles = {
  navLink: "text-blue-500 hover:text-blue-300",
  activeClassName: "text-purple-500 font-bold hover:text-purple-300"
};

export default function Navigation() {
  return (
    <nav>
      <ul className="flex w-3/4 justify-around mx-auto h-8 items-center">
        <li>
          <NavLink
            to="/"
            exact
            className={styles.navLink}
            activeClassName={styles.activeClassName}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new"
            exact
            className={styles.navLink}
            activeClassName={styles.activeClassName}
          >
            Add New Friend
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
