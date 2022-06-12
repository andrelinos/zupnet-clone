import { Home } from "~/components/Home";
import { Faq } from "~/components/Faq";
import { Footer } from "~/components/Footer";
import Nav from "~/components/Nav";
import { SelfService } from "~/components/SelfService";
import { Services } from "~/components/Services";
import { Contact } from "~/components/Contact";
import { CustomerCenter } from "~/components/CustomerCenter";
import { CaretCircleUp } from "phosphor-react";

function hideNavOnScroll() {
  if (scrollY > 800) {
    document.getElementById("back-to-top")?.classList.remove("hide-nav-top");
  } else {
    document.getElementById("back-to-top")?.classList.add("hide-nav-top");
  }
}

function App() {
  window.addEventListener("scroll", hideNavOnScroll);
  return (
    <>
      <Nav />
      <Home />
      <SelfService />
      <Services />
      <Faq />
      <Contact />
      <CustomerCenter />
      <Footer />
      <div
        id="back-to-top"
        className="fixed hide-nav-top bottom-10 right-6 bg-slate-400 rounded-md bg-opacity-30"
      >
        <a href="#home">
          <CaretCircleUp
            className="text-4xl text-shadow text-brand-yellow-500
                    hover:text-brand-yellow-600"
          />
        </a>
      </div>
    </>
  );
}

export default App;
