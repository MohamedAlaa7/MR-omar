import Link from "next/link";
import React from "react";
import styles from "./main.module.css";

const Main = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.main1}>
        <div className={styles.main_info}>
          <h1>الصف الاول الثانوي</h1>
          <p>استكشاف جميع الدروس والمواد التعليمية للصف الأول الثانوي</p>
        </div>

        <Link className={styles.lessons} href="/first-grade">
          عرض الدرس
        </Link>
      </div>
      <div className={styles.main2}>
        <div>
          <h1>الصف الاول الثانوي</h1>
          <p>استكشاف جميع الدروس والمواد التعليمية للصف الأول الثانوي</p>
        </div>

        <Link className={styles.lessons} href="/first-grade">
          عرض الدرس
        </Link>
      </div>
      <div className={styles.main3}>
        <div>
          <h1>الصف الاول الثانوي</h1>
          <p>استكشاف جميع الدروس والمواد التعليمية للصف الأول الثانوي</p>
        </div>

        <Link className={styles.lessons} href="/first-grade">
          عرض الدرس
        </Link>
      </div>
    </div>
  );
};

export default Main;
