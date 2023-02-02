import { MainButton } from "@/ui/buttons";
import { BodyBold } from "ui/typography";
import { useRouter } from "next/router";
import { useState } from "react";
import { InputText } from "ui/text-field";

export const SignUpForm = () => {
  const [email, setEmail] = useState();
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // const emailValue = e.target.email.value;
    // setEmail(emailValue);
    console.log(
      e.target.email.value,
      e.target.fullname.value,
      e.target.address.value
    );
  };

  

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <InputText label="Email" id="email" type="email" md="md:text-lg" />
      <InputText label="Full name" id="fullname" type="text" md="md:text-lg" />
      <InputText label="Address" id="address" type="text" md="md:text-lg" />
      <MainButton>Continuar</MainButton>
    </form>
  );
};
