"use client";
import React, { useState } from "react";
import style from "./header.module.css";
import { routes } from "@/app/utils/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const subHeaderItems = ["SHOP", "SKILL", "STORIES", "ABOUT", "CONTACT US"];
  console.log(isOpen);
  return (
    <header className={style.wrapper}>
      {/* Announce Bar */}
      <div className={style.announceBar}>
        <div className={style.marquee}>
          <span>
            Your announcement message goes here — Summer Sale Now Live! 🌞
          </span>
          <span>
            Your announcement message goes here — Summer Sale Now Live! 🌞
          </span>
          <span>
            Your announcement message goes here — Summer Sale Now Live! 🌞
          </span>
          <span>
            Your announcement message goes here — Summer Sale Now Live! 🌞
          </span>
        </div>
      </div>

      {/* Top Header */}
      <div className={style.header}>
        {/* Hamburger menu */}
        <button
          className={style.menuButton}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          ☰
        </button>

        {/* Icons */}
        <div className={style.icons}>
          <img src="/search.svg" alt="search" />
          <img src="/heart.svg" alt="wishlist" />
          <img src="/bag.svg" alt="bag" />
          <img src="/user.svg" alt="user" className={style.desktopOnly} />
        </div>

        {/* Logo */}
        <div className={style.logo}>
          <img src="/logo.svg" alt="Logo" />
          <h1>LOGO</h1>
        </div>
      </div>

      {/* Desktop Subheader */}
      <div className={style.subheader}>
        {subHeaderItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div
          className={style.mobileSidebarOverlay}
          onClick={() => setIsOpen(false)}
        >
          <div
            className={style.mobileSidebar}
            onClick={(e) => e.stopPropagation()}
          >
            {subHeaderItems.map((item) => (
              <span key={item} className={style.sidebarItem}>
                {item}
              </span>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
