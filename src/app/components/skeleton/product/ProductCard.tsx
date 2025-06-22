import React from "react";
import styles from "./productcard.module.css";

export default function ProductCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.textBlock}>
        <div className={styles.textLineShort}></div>
        <div className={styles.textLine}></div>
        <div className={styles.bottomRow}>
          <div className={styles.price}></div>
          <div className={styles.button}></div>
        </div>
      </div>
    </div>
  );
}
