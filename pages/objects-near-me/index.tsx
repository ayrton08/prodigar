import type { NextPage } from "next";
import Head from "next/head";
import { Layout } from "ui/layout";
import { PostNearMe } from "@/components/ObjectsNearMe";

const PostNearMePage: NextPage = () => {
  return (
    <Layout className="lg:flex lg:justify-center">
      <Head>
        <title>Objetos cerca mío - Prodigar</title>
      </Head>
      <PostNearMe />
    </Layout>
  );
};

export default PostNearMePage;
