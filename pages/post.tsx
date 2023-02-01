import Head from "next/head";
import { Layout } from "../ui/layout/index";
import { ReportForm } from "../components/ReportForm";

const post = () => {
  return (
    <>
      <Head>
        <title>Prodigar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <ReportForm />
      </Layout>
    </>
  );
};

export default post;
