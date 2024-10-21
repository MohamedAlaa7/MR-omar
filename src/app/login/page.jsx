"use client";

import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import Studentgrades from "@/components/constanc/Studentgrades";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();

  const [logedasparent, setLoggedasparent] = useState(false);
  const [pass, setPass] = useState(80);

  // State variables to capture form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");

  // Function to handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log(email, password, role);

    try {
      const requestBody = {
        email: email,
        password: password,
        role: role,
      };

      const response = await fetch("https://omarroshdy.com/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        console.log("Login is successful", data);

        //   Store access token in localStorage
        localStorage.setItem("accessToken", data.access_token);

        // Redirect to the Home page
        router.push("/");

        // add antoher function to generate code for parent
        const parentCodeResponse = await fetch(
          "https://omarroshdy.com/api/v1/generateparentcode",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data.access_token}`,
            },
            body: JSON.stringify({ email: email }),
          }
        );

        const parentCodeData = await parentCodeResponse.json();

        // Check if the parent code is generated successfully
        if (parentCodeResponse.ok) {
          console.log("Parent code generated successfully", parentCodeData);
        } else {
          alert(
            `Error: ${
              parentCodeData.message || "Failed to generate parent code!"
            }`
          );
          console.error("Error:", parentCodeData);
        }
      } else {
        alert(`Error: ${data.message || "Something went wrong!"}`);
        console.error("Error:", data);
      }
    } catch (error) {
      console.error("Request failed:", error);
      alert("Failed to login. Please try again later.");
    }
  };

  return (
    <>
      {!logedasparent ? (
        <div className={styles.container}>
          <div className={styles.right}>
            <Image src="login.svg" alt="login" width={627} height={575} />
          </div>
          <div className={styles.left}>
            <div className={styles.info}>
              <h1>سجل الدخول للمنصة</h1>
              <p>
                ليس لديك حساب؟
                <Link href="/create-account" className={styles.creat_account}>
                  أنشأ حسابك الآن!
                </Link>
              </p>
            </div>
            <form onSubmit={handleLogin} className={styles.form_container}>
              <div className={styles.name_container}>
                <label className={styles.label}> البريد الاليكتروني</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.input}
                  type="email"
                  placeholder="ادخل البريد الاليكتروني الخاص بك"
                />
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
              <div>
                <p>تريد تسجيل الدخول كطالب أم كونك ولي أمر</p>
                <div className={styles.studentorparent}>
                  <div className={styles.student}>
                    <input
                      id="option1"
                      className={styles.radio}
                      type="radio"
                      name="choose"
                    />
                    <label htmlFor="option1">طالب</label>
                  </div>
                  <div className={styles.parent}>
                    <input
                      id="option2"
                      className={styles.radio}
                      type="radio"
                      name="choose"
                    />
                    <label htmlFor="option2">ولي أمر</label>
                  </div>
                </div>
              </div>
              <div className={styles.btn_container}>
                <button className={styles.login}>تسجيل الدخول</button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <>
          <div className={styles.degree_container}>
            <h2>
              تستطيع من هنا متابعة أداء ابنك في الامتحانات ومعرفة تفاصيل درجاته.
            </h2>
            <div className={styles.info_container}>
              <div>
                <p>
                  <span>اسم الطالب :</span>محمود احمد علي
                </p>
              </div>
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
          <div className={styles.student_container}>
            <div className={styles.restult_container}>
              {Studentgrades && Studentgrades.length > 0 ? (
                Studentgrades.map((student, index) => (
                  <div key={index} className={styles.student_card}>
                    <h3>{student.title}</h3>
                    <div className={styles.content_cotainer}>
                      <Image
                        src="calender.svg"
                        alt="calender"
                        width={28}
                        height={28}
                      />
                      <p>{student.data}</p>
                    </div>
                    <div className={styles.content_cotainer}>
                      <Image
                        src="chart.svg"
                        alt="chart"
                        width={28}
                        height={28}
                      />
                      <p>{student.result}</p>
                    </div>
                    <div className={styles.content_cotainer}>
                      {student.result >= `${pass}%` ? (
                        <Image
                          src="pass.svg"
                          alt="pass"
                          width={28}
                          height={28}
                        />
                      ) : (
                        <Image
                          src="notpass.svg"
                          alt="notpass"
                          width={28}
                          height={28}
                        />
                      )}
                      <p>{student.status}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p>لا يوجد بيانات</p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
