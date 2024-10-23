import React from "react";
import styles from "./header.module.css";
import Image from "next/image";
import Button from "../Button/Button";

const Header = () => {
  return (
    <>
      <div className={styles.test}>
        hallo
        <div className={styles.header_container}>
          <div className={styles.right_section}>
            <h1 className={styles.heading}>
              إدارة <span1 className={styles.span}>الدروس والطلاب</span1> بسهولة
              وكفاءة
            </h1>
            <p className={styles.content}>
              مع منصة عمر رشدي في الفيزياء، يمكنك تنظيم دروسك ومتابعة تقدم طلابك
              بكل سهولة.نحن هنا لتقديم الأدوات التي تحتاجها لتجربة تعليمية أكثر
              سلاسة وفعالية.
            </p>
            <Button />
          </div>
          <div className={styles.left_section}>
            <Image
              className={styles.mr_omar}
              src="/mr-omar.png"
              alt="mr-omar"
              width={444}
              height={608}
              priority={true}
            />
          </div>
        </div>
        <Image
          className={styles.teacher}
          src="headercontainer.svg"
          alt="headercontainer"
          width={1440}
          height={695}
          priority={true}
        />
      </div>

      {/* Icons  */}
      <div className={styles.icons_container}>
        <div className={styles.icon1_container}>
          <Image
            className={styles.Vector2}
            src="/Vector2.svg"
            alt="icon"
            width={64}
            height={66}
          />
          <Image
            className={styles.Vector1}
            src="/Vectortest.svg"
            alt="icon"
            width={50}
            height={50}
          />
          <h2>إدارة الدروس بسهولة</h2>
          <p className={styles.icon_content}>
            نظّم دروسك واضف مواد تعليمية جديدة بنقرة واحدة.
          </p>
        </div>
        <div className={styles.icon2_container}>
          <Image
            className={styles.icons}
            src="/iconmiddle.svg"
            alt="icon"
            width={64}
            height={66}
          />
          <h2>متابعة تقدم الطلاب</h2>
          <p className={styles.icon_content}>
            تابع تقدم طلابك بشكل مستمر من خلال تقارير تفصيلية حول أدائهم في
            الدروس والاختبارات.
          </p>
        </div>
        <div className={styles.icon3_container}>
          <Image
            className={styles.icons}
            src="/iconleft.svg"
            alt="icon"
            width={64}
            height={66}
          />
          <h2>طرق دفع متكاملة</h2>
          <p className={styles.icon_content}>
            وفر للطلاب وأولياء الأمور طرق دفع سهلة ومريحة عبر المنصة
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
