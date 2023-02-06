import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";

import { getProductByCart } from "../service/shopService";
import { cartState, modalState } from "../states/atoms";
import styles from "./Cart.module.css";
import Modal from "./Modal";

const Cart = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [count, setCount] = useState(1);
  const [modal, setModal] = useRecoilState(modalState);

  useEffect(() => {
    const fetchProducts = async () => {
      const CartsResponse = await getProductByCart();
      setCart(CartsResponse);
    };
    fetchProducts();
  }, []);

  const handleMinusClick = () => {
    setCount(count - 1);

    if (count === 1) {
      setCart([]);
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
        {cart.length > 0 ? (
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
                    onClick={handleMinusClick}
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
          <button
            onClick={() => {
              setModal(true);
            }}
            className={`${styles.button} ${styles.radiusBtn}`}
          >
            구매하기
          </button>
          {modal ? <Modal /> : null}
        </div>
      </div>
    </section>
  );
};

export default Cart;
