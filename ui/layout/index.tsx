import { Footer } from "ui/footer";
import { Header } from "ui/header";

export const Layout = ({ children }: any) => {
  return (
    <div className="h-screen">
      <Header />
      <main className="content pt-24 md:pt-40 bg-[#FEF5E7] grid md:gap-12">{children}</main>
      <Footer />
    </div>
  );
};
