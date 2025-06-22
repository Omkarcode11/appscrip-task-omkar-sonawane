"use client"

import React from "react";
import ProductCard from "./../card/ProductCard";
import styles from "./product.module.css";
import { Product } from "@/app/types/product";
import ProductCardSkeleton from "../../skeleton/product/ProductCard";

interface Props {
  products: Product[];
}

function ProductList({ products }: Props) {
  return (
    <div className={styles.grid}>
      {!products.length ? (
        <ProductCardSkeleton />
      ) : (
        products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}

export default ProductList;
