import { Header } from "@/sections/Header";
import { Main } from "@/sections/Main";
import { Footer } from "@/sections/Footer";
import { Terminal } from "@/components/Terminal";
import { CvRequestProvider } from "@/components/CvRequestModal";

export const App = () => {
  return (
    <CvRequestProvider>
      <div className="min-h-screen bg-black">
        <Header />
        <Main />
        <Footer />
        <Terminal />
      </div>
    </CvRequestProvider>
  );
};
