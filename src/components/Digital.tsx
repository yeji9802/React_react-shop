import React, { useState, useEffect } from "react";
import styles from "./Category.module.css";

import ShopList from "./ShopList";
import { getProductByCategory } from "./../service/shopService";

const Digital = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const digitalResponse = await getProductByCategory("electronics", 999);

      setProducts(digitalResponse);
    };
    fetchProducts();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.menuArea}>
        <ul className={styles.menu}>
          <li className={styles.menu_home}>홈</li>
          <li className={styles.menu_category}>디지털</li>
        </ul>
      </div>
      <div className={styles.productArea}>
        <h2 className={styles.product_title}>디지털</h2>
        <ul className={styles.product_list}>
          {products.map((products, idx) => (
            <ShopList product={products} key={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Digital;
