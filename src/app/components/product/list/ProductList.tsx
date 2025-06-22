"use client";

import React from "react";
import ProductCard from "./../card/ProductCard";
import styles from "./product.module.css";
import { Product } from "@/app/types/product";
import ProductCardSkeleton from "../../skeleton/product/ProductCard";
import { useAppContext } from "@/app/context/AppContext";

interface Props {
  products: Product[];
}

function ProductList({ products }: Props) {
  const { toggleSidebar } = useAppContext();
  return (
    <div>
      <button className={styles.filterToggleBtn} onClick={toggleSidebar}>
        FILTER
      </button>
      <div className={styles.grid}>
        {!products.length ? (
          [1,2,3,4,5].map(ele=><ProductCardSkeleton />)
        ) : (
          products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  );
}

export default ProductList;
