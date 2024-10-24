"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

const Navbar = ({ isLoggedIn, onLogin, onLogout, parentlooged }) => {
  const router = useRouter();
  const [isopen, setIsopen] = useState(false);
  const [menu, setMenu] = useState(false);

  const toggleDropdown = () => {
    setIsopen(!isopen);
  };

  return (
    <nav className={styles.nav_container}>
      <div className={styles.logo_menu_container}>
        <div>
          <Link href="/">
            <Image
              src="Logo1.svg"
              alt="logo"
              height={87}
              width={170}
              priority={true}
            />
          </Link>
        </div>
        <div onClick={() => setMenu(!menu)} className={styles.menu}>
          <div className={styles.menu_container}>
            {!menu ? (
              <>
                <Image
                  className={styles.menu_icon}
                  src="menu.svg"
                  alt="menu"
                  height={40}
                  width={40}
                  priority={true}
                />
              </>
            ) : (
              <Image
                className={styles.cansel_icon}
                src="cancel.svg"
                alt="cancel"
                height={25}
                width={25}
                priority={true}
              />
            )}
          </div>
        </div>
      </div>
      {menu && (
        <div className={styles.menu_links_container}>
          <Link className={styles.menu_link} href="/">
            الرئيسية
          </Link>
          <Link className={styles.menu_link} href="/pricess">
            التسعير
          </Link>
          <Link className={styles.menu_link} href="/contact">
            تواصل معنا
          </Link>
        </div>
      )}

      {!parentlooged ? (
        <div className={styles.mid_links}>
          <Link className={(styles.link, styles.main)} href="/">
            الرئيسية
          </Link>
          <Link className={styles.link} href="/pricess">
            التسعير
          </Link>
          <Link className={styles.link} href="/contact">
            تواصل معنا
          </Link>
        </div>
      ) : null}
      <div className={styles.left_links}>
        {isLoggedIn ? (
          <Image src="user.svg" alt="user" width={48} height={48} />
        ) : (
          <>
            {parentlooged ? (
              <>
                <div
                  onClick={toggleDropdown}
                  className={styles.dropdown_toggle}
                >
                  <Image
                    src="drobdown.svg"
                    alt="drobdown"
                    width={40}
                    height={40}
                  />
                </div>
                {isopen && (
                  <>
                    <div className={styles.test}>
                      <div className={styles.links_container}>
                        <Image
                          className={styles.drobdown_img}
                          src="contact.svg"
                          alt="contact"
                          width={28}
                          height={28}
                        />
                        <Link className={styles.drobdown_link} href="/contact">
                          تواصل معنا
                        </Link>
                      </div>
                      <div className={styles.divider} />
                      <div className={styles.links_container}>
                        <Image
                          className={styles.drobdown_img}
                          src="logout.svg"
                          alt="logout"
                          width={28}
                          height={28}
                        />
                        <Link className={styles.drobdown_link} href="/logout">
                          تسجيل الخروج
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </>
            ) : (
              <>
                <Link className={styles.link_login} href="/login">
                  <span className={styles.span}>تسجيل الدخول</span>
                </Link>
                <Link className={styles.link_signin} href="/create-account">
                  <span className={styles.span_signin}> انشاء حساب</span>
                </Link>
              </>
            )}
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
