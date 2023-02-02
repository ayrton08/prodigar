import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "ui/layout";
import { MyPost } from "components/MyPostPage";

const MyPostPage: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Mis Publicaciones - Prodigar</title>
      </Head>
      <MyPost />
    </Layout>
  );
};

export default MyPostPage;
