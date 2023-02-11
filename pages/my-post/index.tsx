import type { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from 'ui/layout';
import { MyPost } from 'components/MyPostPage';
import { useRouter } from 'next/router';
import { Id, toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';

const MyPostPage: NextPage = () => {
  const router = useRouter();

  console.log(router);

  useEffect(() => {
    if (router.query.status === 'PUB')
      toast.success(
        `La publicación se realizó con exitó, ${router.query.item} ya esta disponible en la zona indicada.`,
        {
          toastId: router.query.item as Id,
        }
      );

    if (router.query.status === 'DEL')
      toast.error(
        `La publicación se elimino, ${router.query.item} ya no esta disponible.`,
        {
          toastId: router.query.item as Id,
        }
      );
    if (router.query.status === 'UPDATE')
      toast.info(`${router.query.item} se actualizo correctamente.`, {
        toastId: router.query.item as Id,
      });
  }, [router.query.item, router.query.status]);

  return (
    <Layout className="lg:flex lg:justify-center">
      <Head>
        <title>Mis Publicaciones - Prodigar</title>
      </Head>
      <MyPost />

      <ToastContainer
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
      />
    </Layout>
  );
};

export default MyPostPage;
