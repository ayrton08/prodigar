import { Title } from "@/ui/typography";
import { LoginForm } from "./LoginForm";

export const Login = () => {
  return (
    <section className="min-h-[50vh] px-8 pt-10 pb-28 flex flex-col gap-10 center md:w-[700px] md:col-[none] md:min-h-[50vh]">
      <Title align="center">Login</Title>
      <LoginForm />
    </section>
  );
};