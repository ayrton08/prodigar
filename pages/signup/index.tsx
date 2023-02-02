import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "ui/layout";
import { SignUp } from "components/SignUpPage";

const SignUpPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Signup - Prodigar</title>
      </Head>
      <SignUp />
    </Layout>
  );
};

export default SignUpPage;