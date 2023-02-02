import { useRouter } from "next/router";
import { Body, BodyBold, Large, LargeBold, Subtitle } from "ui/typography";
import { Edit } from "ui/icons";
// import { useObjectData } from "hooks";

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
    <div className="shadow-xl rounded-xl md:w-72 hover:border-4 hover:border-ligth-blue">
      <div>
        <img src={img} alt="object" className="h-[250px] w-[100%] object-cover rounded-md hover:bg-sky-700"/>
      </div>

      <div className="flex justify-between items-center p-5">
        <div>
          <LargeBold color="">{name}</LargeBold>
          <Body>{location}</Body>
          <span className="">
            <BodyBold color={state == "Disponible" ? "text-green-600" : "text-red-500"}>{state}</BodyBold>
          </span>
        </div>

        {router.asPath == "/my-post" ? (
          <Edit size={"w-7 h-7"} color="stroke-red-500" />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
