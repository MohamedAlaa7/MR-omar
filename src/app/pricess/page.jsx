import React from "react";
import styles from "./pricess.module.css";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className={styles.pricing_container}>
        <h1 className={styles.title}>خطط الاشتراك لمنصة عمر رشدي</h1>
        <p className="subtitle">
          استفد من ميزات إدارة الدروس، تتبع الطلاب، والدعم الفني.
          <span className={styles.span}>اختر الخطة التي تناسب احتياجاتك.</span>
        </p>
      </div>

      <div className={styles.plans}>
        <div className={styles.plan1}>
          <div className={styles.price_info}>
            <h1>الخطة الأساسية</h1>
            <p className={styles.price}>199 جـ </p>
          </div>
          <div className={styles.price_details}>
            <div className={styles.right}>
              <Image
                src="right.svg"
                alt="right"
                height={24}
                width={24}
                priority={true}
              />
              <Image
                src="right.svg"
                alt="right"
                height={24}
                width={24}
                priority={true}
              />
              <Image
                src="right.svg"
                alt="right"
                height={24}
                width={24}
                priority={true}
              />
              <Image
                src="right.svg"
                alt="right"
                height={24}
                width={24}
                priority={true}
              />
            </div>
            <div>
              <ul className={styles.list}>
                <li className={styles.edit}>إضافة حتى ١٠ دروس شهرياً</li>
                <li>مساحة تخزين تصل إلى ٣ جيجابايت</li>
                <li>دعم فني عبر البريد الإلكتروني فقط</li>
                <li>وصول إلى جميع الأدوات التعليمية</li>
              </ul>
            </div>
          </div>
          <div className={styles.Divider} />
          <div className={styles.subscribe_container}>
            <Link className={styles.subscribe_btn} href="/">
              اشترك الآن
            </Link>
          </div>
        </div>
        <div className={styles.plan2}>
          <div className={styles.price_info}>
            <h1>الخطة الأساسية</h1>
            <p className={styles.price}>199 جـ </p>
          </div>
          <div className={styles.price_details}>
            <div className={styles.right}>
              <Image
                src="right.svg"
                alt="right"
                height={24}
                width={24}
                priority={true}
              />
              <Image
                src="right.svg"
                alt="right"
                height={24}
                width={24}
                priority={true}
              />
              <Image
                src="right.svg"
                alt="right"
                height={24}
                width={24}
                priority={true}
              />
              <Image
                src="right.svg"
                alt="right"
                height={24}
                width={24}
                priority={true}
              />
            </div>
            <div>
              <ul className={styles.list}>
                <li className={styles.edit}>إضافة حتى ١٠ دروس شهرياً</li>
                <li>مساحة تخزين تصل إلى ٣ جيجابايت</li>
                <li>دعم فني عبر البريد الإلكتروني فقط</li>
                <li>وصول إلى جميع الأدوات التعليمية</li>
              </ul>
            </div>
          </div>
          <div className={styles.Divider} />
          <div className={styles.subscribe_container}>
            <Link className={styles.subscribe_btn} href="/">
              اشترك الآن
            </Link>
          </div>
        </div>
        <div className={styles.plan3}>
          <div className={styles.price_info}>
            <h1>الخطة الأساسية</h1>
            <p className={styles.price}>199 جـ </p>
          </div>
          <div className={styles.price_details}>
            <div className={styles.right}>
              <Image
                src="right.svg"
                alt="right"
                height={24}
                width={24}
                priority={true}
              />
              <Image
                src="right.svg"
                alt="right"
                height={24}
                width={24}
                priority={true}
              />
              <Image
                src="right.svg"
                alt="right"
                height={24}
                width={24}
                priority={true}
              />
              <Image
                src="right.svg"
                alt="right"
                height={24}
                width={24}
                priority={true}
              />
            </div>
            <div>
              <ul className={styles.list}>
                <li className={styles.edit}>إضافة حتى ١٠ دروس شهرياً</li>
                <li>مساحة تخزين تصل إلى ٣ جيجابايت</li>
                <li>دعم فني عبر البريد الإلكتروني فقط</li>
                <li>وصول إلى جميع الأدوات التعليمية</li>
              </ul>
            </div>
          </div>
          <div className={styles.Divider} />
          <div className={styles.subscribe_container}>
            <Link className={styles.subscribe_btn} href="/">
              اشترك الآن
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
