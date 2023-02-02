import { MainButton } from "@/ui/buttons";
import { BodyBold } from "ui/typography";
import { useRouter } from "next/router";
import { useState } from "react";
import { InputText } from "ui/text-field";

export const LoginForm = () => {
  const [email, setEmail] = useState();
  const [code, setCode] = useState();
  const router = useRouter();

  const handleEmail = (e: any) => {
    e.preventDefault();
    const emailValue = e.target.email.value;
    setEmail(emailValue);
  };

  const handleCode = (e: any) => {
    e.preventDefault();
    const codeValue = e.target.code.value;
    setCode(codeValue);
  };

  if (code) {
    router.push("/");
  }

  return !email ? (
    <form className="flex flex-col gap-4" onSubmit={handleEmail}>
      <InputText label="Email" id="email" type="email" md="md:text-lg" />
      <MainButton>Continuar</MainButton>
    </form>
  ) : (
    <form className="flex flex-col gap-4" onSubmit={handleCode}>
      <BodyBold color="text-ligth-blue text-center text-[17px] md:text-xl  md:font-bold">
        Te enviamos un código a tu email
      </BodyBold>
      <InputText label="Code" id="code" type="password" md="md:text-lg" />
      <MainButton>Ingresar</MainButton>
    </form>
  );
};
