import Link from "next/link";
import React from "react";
import styles from "./main.module.css";
import Buttom from "../Button/Button2/Buttom";

const Main = () => {
  return (
    <div className={styles.main_container}>
      <div className={styles.main1}>
        <div className={styles.main_info}>
          <h1 className={styles.main_header}>الصف الاول الثانوي</h1>
          <p className={styles.main_content}>
            استكشاف جميع الدروس والمواد التعليمية للصف الأول الثانوي
          </p>
        </div>
        <div>
          <Buttom />
        </div>
      </div>
      <div className={styles.main2}>
        <div>
          <h1 className={styles.main_header}>الصف الاول الثانوي</h1>
          <p className={styles.main_content}>
            استكشاف جميع الدروس والمواد التعليمية للصف الأول الثانوي
          </p>
        </div>

        <div>
          <Buttom />
        </div>
      </div>
      <div className={styles.main3}>
        <div>
          <h1 className={styles.main_header}>الصف الاول الثانوي</h1>
          <p className={styles.main_content}>
            استكشاف جميع الدروس والمواد التعليمية للصف الأول الثانوي
          </p>
        </div>

        <div>
          <Buttom />
        </div>
      </div>
    </div>
  );
};

export default Main;
