"use client";
import React from "react";
import styles from "./sidebar.module.css";
import { useAppContext } from "@/app/context/AppContext";

const filters = [
  "IDEAL FOR",
  "OCCASION",
  "WORK",
  "FABRIC",
  "SEGMENT",
  "SUITABLE FOR",
  "RAW MATERIALS",
  "PATTERN",
];

interface Props {
  categories: string[] | null;
  selectCategory: (category: string | null) => void;
}

export default function Sidebar({ categories, selectCategory }: Props) {
  const { isOpen, toggleSidebar } = useAppContext();

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div className={styles.backdrop} onClick={toggleSidebar}></div>
      )}

      <aside
        className={`${styles.sidebar} ${
          isOpen ? styles.sidebarOpen : styles.sidebarClosed
        }`}
      >
        <div className={styles.mobileHeader}>
          <button className={styles.closeBtn} onClick={toggleSidebar}>
            ✕
          </button>
          <button
            className={styles.clearBtn}
            onClick={() => selectCategory(null)}
          >
            Clear
          </button>
        </div>

        <div className={styles.filterSection}>
          <h3>Select Category</h3>
          {categories?.map((ele) => (
            <label key={ele} className={styles.categoryOption}>
              <input
                type="radio"
                name="category"
                className={styles.categoryItem}
                onChange={() => selectCategory(ele)}
              />
              {ele}
            </label>
          ))}
          <button
            onClick={() => selectCategory("")}
            className={styles.clearButton}
          >
            Clear
          </button>

          {filters.map((filter) => (
            <details key={filter} className={styles.details}>
              <summary className={styles.summary}>{filter}</summary>
              <div className={styles.filterItem}>All</div>
            </details>
          ))}
        </div>
      </aside>
    </>
  );
}
