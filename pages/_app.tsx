import "../styles/reset.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import styled, { ThemeProvider } from "styled-components";
import Navigation from "../src/templates/Navigation";
import Header from "../src/templates/Header";
import { useState } from "react";
import Layout from "../src/templates/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Navigation />
      <div>
        <Header />
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
