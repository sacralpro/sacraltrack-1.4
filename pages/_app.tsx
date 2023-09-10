import React, { useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import RegistrationPage from "./registration";
import * as firebase from 'firebase/app';
import { firebaseConfig } from "../firebaseConfig";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


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
      const app = firebase.initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      // Код инициализации Firebase Analytics

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