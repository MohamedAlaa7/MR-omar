import React from "react";
import Link from "next/link";
import styles from "./button.module.css";

const Buttom = () => {
  return (
    <>
      <Link href="/first-grade" className={styles.btn}>
        عرض الدرس
      </Link>
    </>
  );
};

export default Buttom;
