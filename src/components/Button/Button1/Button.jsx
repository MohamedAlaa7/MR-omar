import React from "react";
import styles from "./button.module.css";
import Link from "next/link";
// import "./button.css";

const Button = () => {
  return (
    <>
      <Link href="/create-account" className={styles.custom_btn}>
        انضم الآن
      </Link>
    </>
  );
};

export default Button;

("custom-btn btn-14");
