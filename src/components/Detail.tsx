import React, { useState, useEffect } from "react";
import styles from "./Detail.module.css";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../service/shopService";
import { Product } from "../model/Product";

const Detail = () => {
  const [products, setProducts] = useState<Product>({} as Product);

  const params = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      const IdsResponse = await getProductById(Number(params.id));
      setProducts(IdsResponse);
    };
    fetchProducts();
  }, [params]);

  const price = Math.round(products.price);

  const handleClick = () => {
    console.log("ss");
  };

  return (
    <section className={styles.container}>
      <div className={styles.menuArea}>
        <ul className={styles.menu}>
          <li className={styles.menu_home}>액세서리</li>
          <li className={styles.menu_category}>{products.title}</li>
        </ul>
      </div>
      <div className={styles.detailArea}>
        <figure className={styles.ImgaeArea}>
          <img
            src={`${products.image}`}
            alt={`${products.title}`}
            className={styles.image}
          />
        </figure>
        <div className={styles.descriptionArea}>
          <h2 className={styles.title}>{products.title}</h2>
          <p className={styles.description}>{products.description}</p>
          <div className={styles.starRating}>
            <div>☆☆☆☆☆</div>
            <div className={styles.count}>4.6 / 400 참여</div>
          </div>
          <p className={styles.price}>{`$${price}`}</p>
          <div>
            <button
              className={`${styles.button} ${styles.buttonIn}`}
              onClick={handleClick}
            >
              장바구니에 담기
            </button>
            <Link to="/cart">
              <button className={`${styles.button} ${styles.buttonOut}`}>
                장바구니로 이동
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
