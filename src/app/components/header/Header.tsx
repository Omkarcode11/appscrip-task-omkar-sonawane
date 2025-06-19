import { routes } from "@/app/utils/site";
import style from './header.module.css';
import React from "react";

export default function Header() {
  return (
    <div id="header" className={style.header}>
      <div className={style.headerContainer}>
        <div className={style.headerLogo}>
          <img src="/logo.svg" alt="logo" />
        </div>

        <h1 className={style.headerTitle}>SHOPIFY</h1>

        <div className={style.settings}>
          {routes.headerRoutes.map((ele) => {
            return <img src={ele.icon} alt={ele.label} key={ele.label} />;
          })}
        </div>
      </div>

      <div className={style.subHeaderContainer}>
        {routes.subheaderRoutes.map((ele) => {
          return <h4 className={style.subTitle} key={ele.label}>{ele.label.toUpperCase()}</h4>;
        })}
      </div>
    </div>
  );
}
