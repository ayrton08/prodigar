import { useRouter } from "next/router";
import Link from "next/link";
import { useState } from "react";
import { PostNearMeForm } from "./ObjectsNearMeForm";
import { deleteItem } from "@/lib/api";
import { BodyBold, LargeBold } from "ui/typography";
import { Edit, Remove } from "ui/icons";
import Image from "next/image";
import ButtonModal from "./ButtonModal";

export type propsObjectCard = {
  description?: string;
  fullName?: string;
  imgURL: string;
  title: string;
  state: string;
  id?: number;
  key: number;
  lat?: string | number;
  lng?: string | number;
  email?: string;
  userId?: number;
};

export const ObjectCard = (props: propsObjectCard) => {
  const router = useRouter();
  const [modalOn, setModalOn] = useState(false);
  const [prop, setProp] = useState() as any;
  const { id, imgURL, title, state, email, lat, lng, fullName, description } =
    props;

  return (
    <div className="shadow-xl rounded-xl hover:shadow-2xl hover:shadow-custom-blue md:w-72 lg:w-full">
      <div>
        <Image
          src={
            imgURL.startsWith("https")
              ? imgURL
              : "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="
          }
          title={title}
          alt={`object-${title}`}
          className="h-[250px] w-[100%] object-cover rounded-md hover:bg-sky-700"
          width={400}
          height={400}
          key={id}
        />
      </div>

      <div className="flex justify-between items-center p-5">
        <div className="grid gap-2">
          <LargeBold>{title}</LargeBold>

          <BodyBold color={state == "PUB" ? "text-green-600" : "text-red-500"}>
            {state}
          </BodyBold>
        </div>

        {router.asPath !== "/objects-near-me" ? (
          <div className="grid gap-3 justify-items-center">
            <Link href={`/item/${id}`}>
              <Edit
                size={"w-7 h-7"}
                color="stroke-yellow-500"
                hover="hover:stroke-blue-500"
              />
            </Link>
            {props.state == "DEL" ? (
              ""
            ) : (
              <ButtonModal
                onClick={async () => {
                  await deleteItem(props);
                }}
              >
                <Remove
                  size={"w-7 h-7"}
                  color="stroke-white"
                  hover="hover:stroke-blue-500"
                />
              </ButtonModal>
            )}
          </div>
        ) : (
          <>
            <div className="grid">
              <a
                className="text-color-link underline font-bold text-center max-w-[120px] hover:text-red-400"
                onClick={function handleClick() {
                  setProp(props);
                  setModalOn(true);
                }}
              >
                BRINDAR INFORMACIÓN
              </a>

              {modalOn && (
                <PostNearMeForm setModalOn={setModalOn} props={prop} />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
