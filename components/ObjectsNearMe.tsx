import { Location } from "@/ui/icons";
import { Loader } from "@/ui/loaders";
import { useState } from "react";
import { DeleteButton } from "ui/buttons";
import { BodyBold, Title } from "ui/typography";
import { ObjectCard } from "./ObjectCard";

export const PostNearMe = () => {
  const [loader, setLoader] = useState(false);
  // solo para prueba
  const [location, setLocation] = useState() as any;
  console.log(location);
  // Le pedimos la ubicación al usuario
  const handleClick = () => {
    setLoader(true);
    navigator.geolocation.getCurrentPosition(async (geolocation) => {
      const lat = geolocation.coords.latitude;
      const lng = geolocation.coords.longitude;
      setLocation({ lat, lng });

      if (lat && lng) {
        setTimeout(() => {
          setLoader(false);
        }, 900);
      }

      // const response = await lostPetsNearby(lat, lng);

      // if (response) {
      //   // setRes(response);
      //   setLoader(false);
      // }
    });
  };

  return (
    <section className="min-h-[50vh] px-8 pt-10 md:pt-0 flex flex-col gap-12 center md:gap-20 md:w-[700px] md:grid md:col-[none] md:min-h-[50vh] ">
      <Title align="center md:text-4xl">Objetos cerca tuyo</Title>

      {location ? (
        <div className="grid md:grid-cols-2 gap-10">
          <ObjectCard
            img="https://res.cloudinary.com/apx-school/image/upload/v1672695885/sillamadrid_z269xh.jpg"
            location={"Mendoza"}
            name={"Silla Madrid"}
            state={"Disponible"}
          />
          <ObjectCard
            img="https://res.cloudinary.com/apx-school/image/upload/v1672696036/lamparakelly_ki7mxd.jpg"
            location={"Mendoza"}
            name={"Silla Madrid"}
            state={"Disponible"}
          />
          <ObjectCard
            img="https://res.cloudinary.com/apx-school/image/upload/v1672696001/sillaikrone_vun1pd.jpg"
            location={"Mendoza"}
            name={"Silla Madrid"}
            state={"Disponible"}
          />
          <ObjectCard
            img="https://res.cloudinary.com/apx-school/image/upload/v1672695524/estanteria_ja3qaj.jpg"
            location={"Mendoza"}
            name={"Silla Madrid"}
            state={"Disponible"}
          />
          <ObjectCard
            img="https://res.cloudinary.com/apx-school/image/upload/v1672694213/estanteriasamari_cx9umu.jpg"
            location={"Mendoza"}
            name={"Silla Madrid"}
            state={"Disponible"}
          />
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
