import React from "react";
import styles from "./contact.module.css";
import Image from "next/image";

const page = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.right_section}>
        <h1 className={styles.heading}>تواصل معنا</h1>
        <p className={styles.help}>
          نحن هنا لمساعدتك! تواصل مع فريقنا بأكثر من طريقة، سواء عبر الهاتف،
          البريد الإلكتروني، أو من خلال ملء النموذج
        </p>
        <div className={styles.contact_icons_container}>
          <div className={styles.contact_icons}>
            <Image
              src="email.svg"
              alt="email"
              height={24}
              width={24}
              priority={true}
            />
            <p className={styles.email}>omarroshdy14@gmail.com</p>
          </div>
          <div className={styles.contact_icons}>
            <Image
              src="phone.svg"
              alt="phone"
              height={24}
              width={24}
              priority={true}
            />
            <p className={styles.phone}>+20 125-147-648-32</p>
          </div>
        </div>
      </div>

      {/* Left Section */}

      <div className={styles.left_section}>
        <h1 className={styles.heading}>اترك لنا رسالة</h1>
        <p className={styles.help}>
          يرجى ملء البيانات التالية وسنتواصل معك في أقرب وقت ممكن.
        </p>
        <form className={styles.form_container}>
          <div className={styles.Name_container}>
            <input
              className={styles.firstName}
              type="text"
              placeholder="الاسم الاول"
              required
            />
            <input
              className={styles.lastName}
              type="text"
              placeholder="الاسم الثاني"
              required
            />
          </div>
          <div className={styles.email_container}>
            <Image
              src="gray-email.svg"
              alt="email"
              height={24}
              width={24}
              priority={true}
            />
            <input
              className={styles.email_input}
              type="email"
              placeholder="البريد الالكتروني"
              required
            />
          </div>
          <div className={styles.phone_container}>
            <Image
              src="gray-phone.svg"
              alt="email"
              height={24}
              width={24}
              priority={true}
            />
            <input
              className={styles.phone_input}
              type="text"
              placeholder=" رقم الهاتف"
              required
            />
          </div>
          <div className={styles.textarea_container}>
            <textarea
              id="test"
              className={styles.massage}
              placeholder="اترك رسالتك"
            >
              اترك رسالتك
            </textarea>
          </div>
          <div className={styles.btn_container}>
            <button className={styles.send}>ارسال</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
