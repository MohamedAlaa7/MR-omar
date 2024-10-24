"use client";
import React, { useState } from "react";
import styles from "./createaccount.module.css";
import Link from "next/link";
import Image from "next/image";

const CreateAccount = () => {
  const [done, setDone] = useState(false);
  const [toggle, setToggle] = useState(true);

  // State variables to capture form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [studyYear, setStudyYear] = useState("1");
  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from reloading the page

    if (password !== password_confirmation) {
      alert(" كلمة السر غير متطابقة");
      return;
    }

    try {
      // Create the request body
      const requestBody = {
        name: name,
        email: email,
        studyyear: studyYear,
        password: password,
        password_confirmation: password_confirmation,
      };

      // Make the POST request
      const response = await fetch("https://omarroshdy.com/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody), // Convert data to JSON string
      });

      const data = await response.json();

      if (response.ok) {
        // Success: Account created
        setDone(true); // Show the success message
        setToggle(false); // Hide the form
        console.log("Account created successfully!", data);
      } else {
        // Error handling
        alert(`Error: ${data.message || "Something went wrong!"}`);
        console.error("Error:", data);
      }
    } catch (error) {
      // Handle network errors or other unexpected issues
      console.error("Request failed:", error);
      alert("Failed to create an account. Please try again later.");
    }
  };

  return (
    <>
      {toggle && (
        <div className={styles.container}>
          <div className={styles.right_side}>
            <Image src="signup.svg" alt="signup" width={642} height={750} />
          </div>
          <div className={styles.left_side}>
            <div className={styles.info}>
              <h1>ابدأ سجل اكونت معانا</h1>
              <p>
                لديك أكونت بالفعل؟
                <Link href="/login" className={styles.login}>
                  سجل الدخول
                </Link>
              </p>
            </div>
            <form onSubmit={handleSubmit} className={styles.form_container}>
              <div className={styles.name_container}>
                <label className={styles.label}>الاسم بالكامل</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  required
                  className={styles.input}
                  type="text"
                  placeholder="ادخل الاسم بالكامل"
                />
              </div>
              <div className={styles.name_container}>
                <label className={styles.label}>البريد الإلكتروني</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.input}
                  type="email"
                  placeholder="ادخل بريدك الإلكتروني"
                />
              </div>
              <div className={styles.name_container}>
                <label className={styles.label}>السنه الدراسيه </label>
                <select
                  onChange={(e) => setStudyYear(e.target.value)}
                  name="study-year"
                  id="study-year"
                  className={styles.input}
                >
                  <option className={styles.options} value="1">
                    الصف الاول الثانوي
                  </option>
                  <option className={styles.options} value="2">
                    الصف الثاني الثانوي
                  </option>
                  <option className={styles.options} value="3">
                    الصف الثالث الثانوي
                  </option>
                </select>
              </div>

              <div className={styles.name_container}>
                <label className={styles.label}>كلمة السر</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={styles.input}
                  type="password"
                  placeholder="ادخل كلمة السر الخاصة بك"
                />
              </div>
              <div className={styles.name_container}>
                <label className={styles.label}>تأكيد كلمة السر</label>
                <input
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className={styles.input}
                  type="password"
                  placeholder="تأكيد كلمة السر الخاصة بك"
                />
              </div>

              <div className={styles.btn_container}>
                <button className={styles.creat_account}>انشأ حسابك</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* After creating Account */}
      {done && (
        <div className={styles.done}>
          <Image
            className={styles.icons}
            src="done.svg"
            alt="done"
            width={275}
            height={275}
          />
          <h3>تم تسجيل بيانات إنشاء حسابك شكرا علي ثقتك بنا ! </h3>
          <p>
            تابع هاتفك سيتم إرسال كود التسجيل الخاص بك والخاص بولي الأمر حتي
            تتمكن من تسجيل الدخول إلي المنصة.
          </p>
        </div>
      )}
    </>
  );
};

export default CreateAccount;
