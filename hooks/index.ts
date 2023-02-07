import { getMe, getSaveToken } from "lib/api";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IUseFetch {
  onFetch: (email: string, path: string) => Promise<any>;
  isSending: boolean;
  notify: (email: string, registered: boolean) => void;
}

export const useFetch = (): IUseFetch => {
  const [isSending, setIsSending] = useState<boolean>(false);

  const notify = (email: string, registered: boolean) => {
    !registered
      ? toast.info(
          `Ya hemos registrado el mail ${email}, en breve te enviaremos las novedades a tu mail.`,
          {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        )
      : toast.success(
          `Hemos registrado el mail ${email}, en breve te enviaremos las novedades a tu mail.`,
          {
            position: "bottom-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
  };
  const onFetch = async (email: string, path: string) => {
    try {
      setIsSending(true);
      const res = await fetch(`https://prodigar.vercel.app/api${path}`, {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      setIsSending(false);
      return data;
    } catch (error) {
      setIsSending(false);
      return error;
    }
  };

  return { onFetch, isSending, notify };
};

export function useGetToken() {
  const getToken = getSaveToken();
  const [token, setToken] = useState() as any;

  useEffect(() => {
    setToken(getToken);
  }, [getToken]);

  return { token };
}

export function useMe() {
  const [data, setData] = useState() as any;

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMe();
      setData(data);
    };
    fetchData();
  }, []);

  return data;
}
