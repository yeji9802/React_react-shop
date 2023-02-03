import React, { useState, useEffect } from "react";
import styles from "./Category.module.css";

import ShopList from "./ShopList";
import { getProductByCategory } from "./../service/shopService";

const Accessory = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const accessoryResponse = await getProductByCategory("jewelery", 999);
      setProducts(accessoryResponse);
    };
    fetchProducts();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.menuArea}>
        <ul className={styles.menu}>
          <li className={styles.menu_home}>홈</li>
          <li className={styles.menu_category}>액세서리</li>
        </ul>
      </div>
      <div className={styles.productArea}>
        <h2 className={styles.product_title}>액세서리</h2>
        <ul className={styles.product_list}>
          {products.map((products, idx) => (
            <ShopList product={products} key={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Accessory;
