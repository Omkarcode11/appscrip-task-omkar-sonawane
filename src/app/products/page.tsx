"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import ProductList from "../components/product/list/ProductList";
import { fetchProducts } from "../utils/api";
import style from "./page.module.css";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const limit = 9;
  const maxPages = 10;

  useEffect(() => {
    const loadProducts = async () => {
      const response = await fetchProducts(page, limit);
      setProducts(response.products);
      const actualTotalPages = Math.ceil(response.total / limit);
      setTotalPages(Math.min(actualTotalPages, maxPages)); 
    };

    loadProducts();
  }, [page]);

  const renderPagination = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`${style.pageButton} ${page === i ? style.activePage : ""}`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className={style.pagination}>
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className={style.pageNav}
        >
          Previous
        </button>
        {buttons}
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className={style.pageNav}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className={style.container}>
      <Sidebar isOpen={true} />
      <div className={style.content}>
        <ProductList products={products} />
        {renderPagination()}
      </div>
    </div>
  );
}

export default AllProducts;
