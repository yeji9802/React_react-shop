import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";

import { getProductByCategory } from "../service/shopService";
import { Product } from "./../model/Product";
import ShopList from "./ShopList";

const Main = () => {
  const [fashions, setFashions] = useState([]);
  const [accessorys, setAccessorys] = useState([]);
  const [digitals, setDigitals] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const fashionResponse = await getProductByCategory("men's clothing", 4);
      const accessoryResponse = await getProductByCategory("jewelery", 4);
      const digitalResponse = await getProductByCategory("electronics", 4);

      setFashions(fashionResponse);
      setAccessorys(accessoryResponse);
      setDigitals(digitalResponse);
    };
    fetchProducts();
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.categoryArea}>
        <h2 className={styles.title}>패션</h2>
        <ul className={styles.product_list}>
          {fashions.map((fashion, idx) => (
            <ShopList product={fashion} key={idx} />
          ))}
        </ul>
      </div>
      <div className={styles.categoryArea}>
        <h2 className={styles.title}>액세서리</h2>
        <ul className={styles.product_list}>
          {accessorys.map((accessory, idx) => (
            <ShopList product={accessory} key={idx} />
          ))}
        </ul>
      </div>
      <div className={styles.categoryArea}>
        <h2 className={styles.title}>디지털 </h2>
        <ul className={styles.product_list}>
          {digitals.map((digital, idx) => (
            <ShopList product={digital} key={idx} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Main;
