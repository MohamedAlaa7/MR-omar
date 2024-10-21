import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.footer_container}>
      <div className={styles.logo_icons}>
        <div>
          <Image
            className={styles.footer_logo}
            src="Logo1.svg"
            alt="logo"
            height={87}
            width={170}
            priority={true}
          />
        </div>
        <div className={styles.social_icons_container}>
          <Link href="/" className={styles.social_icons_links}>
            <Image
              src="youtube.svg"
              alt="logo"
              height={67}
              width={61}
              priority={true}
              className={styles.social_icons_img}
            />
          </Link>
          <Link href="/" className={styles.social_icons_links}>
            <Image
              src="instagram.svg"
              alt="logo"
              height={64}
              width={61}
              priority={true}
              className={styles.social_icons_img}
            />
          </Link>
          <Link href="/" className={styles.social_icons_links}>
            <Image
              src="tiktok.svg"
              alt="logo"
              height={64}
              width={61}
              priority={true}
              className={styles.social_icons_img}
            />
          </Link>
          <Link href="/" className={styles.social_icons_links}>
            <Image
              src="facebook.svg"
              alt="logo"
              height={64}
              width={61}
              priority={true}
              className={styles.social_icons_img}
            />
          </Link>
        </div>
      </div>
      <div className={styles.bottom_links}>
        <p>جميع الحقوق محفوظة 2024</p>
        <div className={styles.middle_bottom_links}>
          <Link className={styles.footer_links} href="/">
            الرئيسية
          </Link>
          <Link className={styles.footer_links} href="/">
            التسعير
          </Link>
          <Link className={styles.footer_links} href="/">
            تواصل معنا
          </Link>
        </div>
        <div className={styles.left_bottom_links}>
          <Link className={styles.footer_links} href="/">
            سياسة الخصوصية
          </Link>
          <Link className={styles.footer_links} href="/">
            شروط الاستخدام
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
