import styles from "./NavbarSearch.module.scss";

const NavbarSearch = () => {
  return (
    <div className={styles.search_bar}>
      <input placeholder="search" />
    </div>
  );
};

export default NavbarSearch;
