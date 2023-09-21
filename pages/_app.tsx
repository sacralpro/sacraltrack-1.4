import React, { useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import RegistrationPage from "./registration";
import { firebaseConfig } from "../firebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth }  from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { auth } from "../firebase/auth";
// import { firestore } from "../firebase/firestore";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);


function MainLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
  return (
    <React.Fragment>
      <Head>
        <title>sacral-track1.1</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {children}
    </React.Fragment>
  );
}

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  useEffect(() => {
    if (typeof window !== "undefined") {
     
      return () => {
        // Код очистки ресурсов, если необходимо
      };
    }
  }, []);

  // Добавляем условие для страницы регистрации
  if (Component === RegistrationPage) {
    return (
      <React.Fragment>
        <Head>
          <title>sacral-track1.1 - Registration</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <RegistrationPage {...pageProps} />
      </React.Fragment>
    );
  }

  // Возвращаем общий шаблон для других страниц
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
