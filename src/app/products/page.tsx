"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "../components/product/list/sidebar/Sidebar";
import ProductList from "../components/product/list/ProductList";
import {
  fetchCategory,
  fetchProductByCategory,
  fetchProducts,
} from "../utils/api";
import style from "./page.module.css";

// Import the Product type from your types folder
import type { Product } from "../types/product";

function AllProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(10);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const limit = 10;

  useEffect(() => {
    const loadProducts = async () => {
      try {
        let response;
        if (selectedCategory) {
          response = await fetchProductByCategory(selectedCategory);
        } else {
          response = await fetchProducts(page, limit);
        }

        const fetchedProducts = Array.isArray(response.products)
          ? response.products
          : [];

        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
        setTotalPages(1);
      }
    };

    loadProducts();
  }, [page, selectedCategory]);

  useEffect(() => {
    fetchCategory().then((res) => setCategories(res.categories));
  }, []);

  const renderPagination = () => {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setPage(i)}
          className={`${style.pageButton} ${
            page === i ? style.activePage : ""
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className={style.pagination}>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className={style.pageNav}
        >
          Previous
        </button>
        {buttons}
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
          className={style.pageNav}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div>
      <div className={style.header}>
        <h1>Discover our products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>
      </div>
      <div className={style.container}>
        <Sidebar categories={categories} selectCategory={setSelectedCategory} />
        <div className={style.content}>
          <ProductList products={products} />
          {!selectedCategory && renderPagination()}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
