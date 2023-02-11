import { useState } from "react";
import { searchItemsByLocation } from "lib/api";
import { ObjectCard } from "./ObjectCard";
import { Location } from "ui/icons";
import { Loader } from "ui/loaders";
import { DeleteButton } from "ui/buttons";
import { BodyBold, Subtitle, Title } from "ui/typography";

export const PostNearMe = () => {
  const [loader, setLoader] = useState(false);
  const [res, setRes] = useState(null) as any;
  
  const handleClick = () => {
    setLoader(true);
    navigator.geolocation.getCurrentPosition(async (geolocation) => {
      const lat = geolocation.coords.latitude;
      const lng = geolocation.coords.longitude;
      const res = await searchItemsByLocation(lat, lng);

      if (res) {
        setRes(res);
        setLoader(false);
      }
    });
  };

  return (
    <section className="min-h-[50vh] px-8 pt-10 md:pt-0 flex flex-col gap-12 center md:gap-20 md:w-[800px] lg:w-full lg:max-w-[1500px] md:grid md:col-[none] md:min-h-[50vh] ">
      <Title align="center md:text-4xl">Objetos cerca tuyo</Title>

      {res !== null ? (
        <div>
          {res?.data?.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {res.data.map((r: any) =>
                r.state == "DEL" ? undefined : (
                  <ObjectCard
                    imgURL={r.imgURL}
                    title={r.title}
                    state={r.state}
                    key={r.objectID || r.title}
                    id={Number(r.objectID)}
                    email={r.email}
                  />
                )
              )}
            </div>
          ) : (
            <Subtitle align={"center"} color={"text-blue-500"}>
              Todavía no hay objectos publicados cerca tuyo
            </Subtitle>
          )}
        </div>
      ) : (
        <div className="flex flex-col gap-6 md:gap-10 text-center items-center">
          <Location
            size={"w-[90px] h-[90px] md:w-[140px] md:h-[140px]"}
            color="stroke-red-500"
          />
          <BodyBold>
            PARA VER LOS OBJETOS REPORTADOS CERCA TUYO NECESITAMOS PERMISO PARA
            CONOCER TU UBICACIÓN.
          </BodyBold>

          <DeleteButton onClick={handleClick}>
            {loader ? <Loader /> : "Dar mi ubicación"}
          </DeleteButton>
        </div>
      )}
    </section>
  );
};
