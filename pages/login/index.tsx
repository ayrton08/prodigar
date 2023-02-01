import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "ui/layout";
import { Login } from "components/LoginPage";

const LoginPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Ingresar - Compralo</title>
      </Head>
      <Login />
    </Layout>
  );
};

export default LoginPage;