import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from 'ui/layout';
import { MyPost } from 'components/MyPostPage';
import { useRouter } from 'next/router';
import { Id, toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

const MyPostPage: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (router.query.item) {
      toast.success(
        `La publicación se realizó con exitó, ${router.query.item} ya esta disponible en la zona indicada.`,
        {
          toastId: router.query.item as Id,
        }
      );
    }
  }, [router.query.item]);

  return (
    <Layout className='lg:flex lg:justify-center'>
      <Head>
        <title>Mis Publicaciones - Prodigar</title>
      </Head>
      <MyPost />

      {/* <ToastContainer
        position="bottom-left"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className="font-bold"
        theme="colored"
      /> */}
    </Layout>
  );
};

export default MyPostPage;
