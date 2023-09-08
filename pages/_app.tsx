import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import RegistrationPage from './registration';

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

function MyApp({ Component, pageProps }: AppProps) {
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
