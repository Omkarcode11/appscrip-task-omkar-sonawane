"use client";
import React from "react";
import style from "./footer.module.css";
import { routes } from "@/app/utils/site";

function Footer() {
  return (
    <div className={style.footer} id="footer">
      {/* Newsletter and Contact */}
      <div className={style.footerTop}>
        <div className={style.newsletter}>
          <p className={style.heading}>BE THE FIRST TO KNOW</p>
          <p>Sign up for updates from mettā muse.</p>
          <div className={style.newsletterForm}>
            <input
              type="email"
              className={style.newsletterInput}
              placeholder="Enter your e-mail..."
            />
            <button className={style.subscribeButton}>SUBSCRIBE</button>
          </div>
        </div>
        <div className={style.contactCurrency}>
          <div>
            <p className={style.heading}>CONTACT US</p>
            <p>+91 8956534135</p>
            <p>omkarsonawaneomkar2@gmail.com</p>
          </div>
          <div>
            <p className={style.heading}>CURRENCY</p>
            <p>
              <img src="/usa.svg" alt="usd" /> • USD
            </p>
            <p className={style.currencyNote}>
              Transactions will be completed in Euros and a currency reference
              is available on hover.
            </p>
          </div>
        </div>
      </div>

      <hr className={style.separator} />

      {/* Links and Social */}
      <div className={style.footerBottom}>
        <div>
          <p className={style.heading}>mettā muse</p>
          {QuickLinks(routes.footerRoutes.mettamuse)}
        </div>
        <div>
          <p className={style.heading}>QUICK LINKS</p>
          {QuickLinks(routes.footerRoutes.quickLink)}
        </div>
        <div className={style.socialAndPayment}>
          <div>
            <p className={style.heading}>FOLLOW US</p>
            <div className={style.icons}>
              <button
                className={style.icons}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/omkardev/",
                    "popupWindow",
                    "width=600,height=600,scrollbars=yes"
                  )
                }
              >
                <img src="/social.svg" alt="Instagram" />
              </button>
            </div>
          </div>
          <div>
            <p className={style.heading}>mettā muse ACCEPTS</p>
            <div className={style.paymentIcons}>
              <img src="/payment.svg" alt="Payment methods" />
            </div>
          </div>
        </div>
      </div>

      <p className={style.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </div>
  );
}

function QuickLinks(arr: string[]) {
  return arr.map((item, idx) => (
    <p key={idx} className={style.link}>
      {item}
    </p>
  ));
}

export default Footer;
