import React from "react";
import styles from "./Navbar.module.scss";
import { navlinks } from "@blog/utils/constants";
import NavbarSearch from "./NavbarSearch/NavbarSearch";
import SignupLoginButton from "./SignupLoginButton/SignupLoginButton";

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className="logo">Logo</div>
    <div className={styles.nav_links}>
      {navlinks.map((navlinks) => (
        <a href={navlinks.link}>{navlinks.name}</a>
      ))}
    </div>
    <NavbarSearch />
    <SignupLoginButton />
  </nav>
);

export default Navbar;
