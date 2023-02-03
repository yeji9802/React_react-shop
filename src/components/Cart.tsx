import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductByCart } from "../service/shopService";
import styles from "./Cart.module.css";

const Cart = () => {
  const [cart, setCart] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      const CartsResponse = await getProductByCart();
      setCart(CartsResponse);
    };
    fetchProducts();
  }, []);

  console.log(cart);

  return (
    <section className={styles.container}>
      <div className={styles.menuArea}>
        <ul className={styles.menu}>
          <li className={styles.menu_home}>홈</li>
          <li className={styles.menu_category}>장바구니</li>
        </ul>
      </div>
      <div className={styles.cartX}>
        {cart ? (
          <div>
            <figure className={styles.ImgaeArea}>
              <img src="" alt="" />
            </figure>
            <div>
              <h2>Mens Casual Premium Slim Fit T-Shirts</h2>
              <p>$67</p>
              <div>
                <button>-</button>
                <span>{count}</span>
                <button>+</button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className={styles.cartIn}>
              <h2 className={styles.title}>장바구니에 물품이 없습니다.</h2>
              <Link to="/">
                <button className={styles.button}>담으러 가기</button>
              </Link>
            </div>
            <div className={styles.priceArea}>
              <div></div>
              <div>
                <span className={styles.price}>총 : $0</span>
                <button className={styles.button}>구매하기</button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Cart;
