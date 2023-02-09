import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';
import { PostNearMeForm } from './ObjectsNearMeForm';
import { BodyBold, LargeBold } from 'ui/typography';
import { Edit, Remove } from 'ui/icons';
import Image from 'next/image';
// import { useAppSelector } from "@/hooks/redux-toolkit";
// import { RootState } from "@/store";
// import { useMe } from "@/hooks";

type propsObjectCard = {
  img: string;
  name: string;
  state: string;
  id?: number;
  last_location_lat?: string | number;
  last_location_lng?: string | number;
};

export const ObjectCard = (props: propsObjectCard) => {
  const router = useRouter();
  const [modalOn, setModalOn] = useState(false);
  const { img, name, state, id } = props;
  // const dataUser = useMe();

  const clicked = () => {
    setModalOn(true);
  };

  return (
    <div className="shadow-xl rounded-xl hover:shadow-2xl hover:shadow-custom-blue md:w-72">
      <div>
        <Image
          src={img}
          alt="object"
          className="h-[250px] w-[100%] object-cover rounded-md hover:bg-sky-700"
        />
      </div>

      <div className="flex justify-between items-center p-5">
        <div className="grid gap-2">
          <LargeBold color="">{name}</LargeBold>

          <BodyBold color={state == 'PUB' ? 'text-green-600' : 'text-red-500'}>
            {state}
          </BodyBold>
        </div>

        {router.asPath == '/my-post' ? (
          <div className="grid gap-3">
            <Link href={`/item/${id}`}>
              <Edit size={'w-7 h-7'} color="stroke-yellow-500" />
            </Link>

            <Remove size={'w-7 h-7'} color="stroke-red-500" />
          </div>
        ) : (
          <>
            <div className="grid">
              <a
                className="text-color-link underline font-bold text-center max-w-[120px] hover:text-red-400"
                onClick={clicked}
              >
                BRINDAR INFORMACIÓN
              </a>

              {modalOn && <PostNearMeForm setModalOn={setModalOn} />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
