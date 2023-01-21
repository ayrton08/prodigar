import Head from "next/head";
import { Title, Subtitle, Large, Body, BodyBold, Small } from "@/ui/typography";
import { PostPreview } from "@/components/PostPreview";
import { AdminPreview } from "../components/AdminPreview";
import { MapPreview } from "components/MapPreview";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prodigar</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title color="text-red-500">Prodigar</Title>
        <Subtitle>Prodigar</Subtitle>
        <Large color="text-blue-400">Prodigar</Large>
        <Body>Prodigar</Body>
        <BodyBold>Prodigar</BodyBold>
        <Small>Prodigar</Small>
        <PostPreview />
        <AdminPreview />
        <MapPreview />
      </main>
    </>
  );
}
