"use client"

import React, { useState } from "react";
import styles from "./productCard.module.css";
import { Product } from "@/app/types/product";
import Link from "next/link";
import Image from "next/image";
import ImageWithFallback from "../../fallback/FallbackImage";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const [fill, setFill] = useState(false);

  return (
    <div className={styles.card}>
      <span className={styles.label}>NEW PRODUCT</span>

      <div className={styles.imageWrapper}>
        <ImageWithFallback
          src={product.image}
          fallbackSrc="/image-fallback.jpg"
          alt={product.title}
          height={180}
          width={180}
          className={styles.image}
        />
      </div>

      <div className={styles.details}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.loginText}>
          <Link href="/products">Sign in</Link> or Create an account to see pricing
        </p>
        <button
          onClick={() => setFill((prev) => !prev)}
          className={styles.wishlistButton}
          aria-label="Toggle wishlist"
        >
          <Image
            src={fill ? "/heart-fill-red.svg" : "/heart.svg"}
            alt="wishlist"
            height={20}
            width={20}
            className={styles.icon}
          />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
