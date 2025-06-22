// components/product/ProductList.jsx
import React from "react";
import ProductCard from "./../card/ProductCard";
import styles from "./product.module.css";
import { Product } from "@/app/types/product";

interface Props {
  products: Product[];
}

function ProductList({ products }:Props) {
  return (
    <div className={styles.grid}>
      {products.map((product:Product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
