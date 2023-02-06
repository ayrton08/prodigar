import { useRouter } from "next/router";
import { Body, BodyBold, LargeBold } from "ui/typography";
import { Edit } from "ui/icons";
import { useState } from "react";
import { PostNearMeForm } from "./ObjectsNearMeForm";

type propsObjectCard = {
  img: string;
  name: string;
  location: string;
  state: string;
  id?: number;
  last_location_lat?: string | number;
  last_location_lng?: string | number;
};

export const ObjectCard = (props: propsObjectCard) => {
  const router = useRouter();
  const [modalOn, setModalOn] = useState(false);

  const clicked = () => {
    setModalOn(true);
  };
  // const [petData, setPetData] = useObjectData();
  const {
    img,
    name,
    location,
    state,
    id,
    last_location_lat,
    last_location_lng,
  } = props;

  return (
    <div className="shadow-xl rounded-xl hover:shadow-2xl hover:shadow-custom-blue md:w-72">
      <div>
        <img
          src={img}
          alt="object"
          className="h-[250px] w-[100%] object-cover rounded-md hover:bg-sky-700"
        />
      </div>

      <div className="flex justify-between items-center p-5">
        <div>
          <LargeBold color="">{name}</LargeBold>
          <Body>{location}</Body>
          <span className="">
            <BodyBold
              color={state == "Disponible" ? "text-green-600" : "text-red-500"}
            >
              {state}
            </BodyBold>
          </span>
        </div>

        {router.asPath == "/my-post" ? (
          <Edit size={"w-7 h-7"} color="stroke-red-500" />
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
