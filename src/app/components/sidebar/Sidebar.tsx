import React from "react";
import styles from "./sidebar.module.css";

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
  isOpen: boolean;
}

export default function Sidebar({ isOpen }: Props) {
  return (
    <aside
      className={`${styles.sidebar} ${
        isOpen ? styles.sidebarOpen : styles.sidebarClosed
      }`}
    >
      <div className={styles.filterSection}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" />
          <span>CUSTOMIZABLE</span>
        </label>
        {filters.map((filter) => (
          <details key={filter} className={styles.details}>
            <summary className={styles.summary}>{filter}</summary>
            <div className={styles.filterItem}>All</div>
          </details>
        ))}
      </div>
    </aside>
  );
}
