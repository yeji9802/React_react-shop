import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";

import Search from "./Search";

const Header = () => {
  const menus = [
    { name: "fashion", title: "패션" },
    { name: "accessory", title: "액세서리" },
    { name: "digital", title: "디지털" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <div className={styles.left}>
          <h1 className={styles.title}>
            <Link to="/">React Shop</Link>
          </h1>
          <div className={styles.menus}>
            {menus.map((menu) => {
              return (
                <Link
                  to={`/${menu.name}`}
                  key={menu.name}
                  className={styles.menu}
                >
                  {menu.title}
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.right}>
          <Search />
          <Link to="/cart" className={styles.cart}>
            <span>
              <HiOutlineShoppingBag className={styles.cartIcon} />
            </span>
            <span className={styles.count}>0</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
