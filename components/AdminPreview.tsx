import Image from "next/image";
import admin from "../public/admin.svg";
import { Title, Large } from "../ui/typography";
import { AdminForm } from "./AdminForm";
import { Subtitle } from "@/ui/typography";
import { Body } from "../ui/typography/index";
import { Information } from "./Information";

export const AdminPreview = () => {
  return (
    <section className=" w-full px-6 sm:px-16  gap-20 p-4 flex flex-col items-center lg:flex-row-reverse text-[#2C3E50] justify-evenly">
      <div className="w-[600px] px-auto py-8 flex flex-col justify-between gap-10 ">
        <Title>Administra tus posteos realizados</Title>
        <div className="glass-efect p-3 rounded-md">
          <Information title="Informacion Personal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus minus quod quam aperiam cumque illo deserunt rerum
            facere dolore tenetur magni, tempora ut iusto quis mollitia
            perferendis rem vel alias.
          </Information>
          <Information title="Ubicacion">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus minus quod quam aperiam cumque illo deserunt rerum
            facere dolore tenetur magni, tempora ut iusto quis mollitia
            perferendis rem vel alias.
          </Information>
          <Information title="Imagen">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus minus quod quam aperiam cumque illo deserunt rerum
            facere dolore tenetur magni, tempora ut iusto quis mollitia
            perferendis rem vel alias.
          </Information>
        </div>
      </div>
      <div className="card__admin glass-efect">
        <AdminForm></AdminForm>
        {/* <Image src={admin} alt="" className="img zoom" /> */}
      </div>
    </section>
  );
};
