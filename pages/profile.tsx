import Head from 'next/head';
import Image from 'next/image';
import { Layout } from '../ui/layout/index';
import { Subtitle, Small, BodyBold } from '../ui/typography/index';

import avatar from '@/public/avatar.svg';
import { CardUser } from '../components/CardUser';

const post = () => {
  return (
    <>
      <Head>
        <title>Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="xl:w-2/3 w-full flex gap-20 px-10 pt-10 flex-col md:flex-row items-center justify-center justify-self-center lg:px-20">
          <div className="lg:w-1/2 h-full flex flex-col justify-start items-center gap-10">
            <Image
              src={avatar}
              alt="profile"
              className="w-44 rounded-full border-4 border-custom-blue "
              width={300}
              height={300}
            />
            <Subtitle>Ayrton Juarez</Subtitle>
          </div>
          <div className=" xl:w-1/2 w-full mx-auto flex items-center">
            <CardUser
              address="El Dorado 370"
              city="Puerto Rico"
              email="ayrton@gmail.com"
            />
          </div>
        </div>
      </Layout>
    </>
  );
};

export default post;
