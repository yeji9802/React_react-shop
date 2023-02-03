import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductByCart } from "../service/shopService";
import styles from "./Cart.module.css";

const Cart = () => {
  const [cart, setCart] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      const CartsResponse = await getProductByCart();
      setCart(CartsResponse);
    };
    fetchProducts();
  }, []);

  console.log(cart);

  const handleClick = () => {
    setCount(count - 1);

    if (count === 1) {
      setCart(false);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.menuArea}>
        <ul className={styles.menu}>
          <li className={styles.menu_home}>홈</li>
          <li className={styles.menu_category}>장바구니</li>
        </ul>
      </div>
      <div className={styles.cart}>
        {cart ? (
          <>
            <div className={styles.cartO}>
              <figure className={styles.imgaeArea}>
                <img src="" alt="" className={styles.imgae} />
              </figure>
              <div className={styles.descriptionArea}>
                <h2 className={styles.title}>
                  Mens Casual Premium Slim Fit T-Shirts
                </h2>
                <p className={styles.price}>$67</p>
                <div>
                  <button
                    onClick={handleClick}
                    className={`${styles.button} ${styles.leftBtn}`}
                  >
                    -
                  </button>
                  <button className={`${styles.button} ${styles.countBtn}`}>
                    {count}
                  </button>
                  <button
                    onClick={() => setCount(count + 1)}
                    className={`${styles.button} ${styles.rightBtn}`}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.cartX}>
              <h2 className={styles.title}>장바구니에 물품이 없습니다.</h2>
              <Link to="/" className={styles.link}>
                <button className={`${styles.button} ${styles.radiusBtn}`}>
                  담으러 가기
                </button>
              </Link>
            </div>
            <div className={styles.priceArea}>
              <div></div>
            </div>
          </>
        )}
        <div className={styles.purchaseArea}>
          <span className={styles.price}>총 : $0</span>
          <button className={`${styles.button} ${styles.radiusBtn}`}>
            구매하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cart;
