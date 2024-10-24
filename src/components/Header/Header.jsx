import styles from "./header.module.css";
import Image from "next/image";
import Button from "../Button/Button1/Button";

const Header = () => {
  return (
    <>
      <div className={styles.test}>
        <Image
          className={styles.right_dots}
          src="/rightdots.svg"
          alt="rightdots"
          width={158}
          height={145}
          priority={true}
        />
        <Image
          className={styles.left_dots}
          src="/leftdots.svg"
          alt="leftdots"
          width={185}
          height={148}
          priority={true}
        />
        <Image
          className={styles.atom_photo}
          src="/mainatom.svg"
          alt="mainatom"
          width={187}
          height={187}
          priority={true}
        />
        <Image
          className={styles.arrow_photo}
          src="/arrow.svg"
          alt="arrow"
          width={110}
          height={110}
          priority={true}
        />

        <Image
          className={styles.apple_photo}
          src="/apple.svg"
          alt="apple"
          width={73}
          height={75}
          priority={true}
        />
        <Image
          className={styles.samllatom_photo}
          src="/smallatom.svg"
          alt="smallatom"
          width={80}
          height={80}
          priority={true}
        />
        <Image
          className={styles.dash_photo}
          src="/dash.svg"
          alt="dash"
          width={74}
          height={68}
          priority={true}
        />
        <Image
          className={styles.stars_photo}
          src="/stars.svg"
          alt="stars"
          width={70}
          height={45}
          priority={true}
        />

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
            className={styles.omar}
            src="/omar.png"
            alt="omar"
            width={444}
            height={608}
            priority={true}
          />
        </div>
      </div>

      {/* Icons  */}
      <div className={styles.icons_container}>
        <div className={styles.icon1_container}>
          <Image
            className={styles.Vector2}
            src="/iconright.svg"
            alt="icon"
            width={64}
            height={66}
          />
          {/* <Image
            className={styles.Vector1}
            src="/Vectortest.svg"
            alt="icon"
            width={50}
            height={50}
          /> */}
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
