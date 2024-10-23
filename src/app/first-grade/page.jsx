import React from "react";
import styles from "./first-grade.module.css";
import Image from "next/image";
import lectures from "../../components/constanc/lectures";

const page = () => {
  return (
    <>
      <div className={styles.header_container}>
        <Image
          className={styles.test}
          src="lessons-background.svg"
          alt="icon"
          width={100}
          height={100}
          priority={true}
        />
        <div className={styles.content_container}>
          <h1 className={styles.content_title}>محاضرات الصف الأول الثانوي</h1>
          <p className={styles.content}>
            دلوقتي هتقدر تفهم الفيزياء بشكل أبسط وأسهل! كل المواضيع اللي محتاج
            تعرفها عن الحركة، القوى، والشغل متقسمة بشكل منظم علشان تذاكر بتركيز
            وتحقق أعلى الدرجات!
          </p>
          <div className={styles.search_container}>
            <input
              className={styles.input_search}
              type="search"
              placeholder="ابحث بالتاريخ أو العنوان"
            />
            <button className={styles.search}>بحث</button>
          </div>
        </div>
      </div>
      <div className={styles.lectures_container}>
        <div className={styles.lectures_grid}>
          {lectures && lectures.length > 0 ? (
            lectures.map((lecture, index) => (
              <div key={index} className={styles.lecture_card}>
                <Image
                  width={330}
                  height={290}
                  src={lecture.image}
                  alt={lecture.title}
                  className={styles.lecture_image}
                />
                <div className={styles.duration}>
                  <Image src="clock.svg" alt="clock" width={20} height={20} />
                  <p className={styles.time}>{lecture.duration}</p>
                </div>
                <h2 className={styles.lecture_title}>{lecture.title}</h2>
                <p className={styles.lecture_description}>
                  {lecture.description}
                </p>
                <button className={styles.watch}>{lecture.buttonText}</button>
              </div>
            ))
          ) : (
            <p>لا توجد محاضرات حالياً.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default page;
