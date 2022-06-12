import { CaretRight, List, User, WhatsappLogo, X } from "phosphor-react";
import { useEffect, useState } from "react";
import { menuItens } from "../../../services/api/menu";

export function Mobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body?.classList.add("scroll");
    } else {
      document.body?.classList.remove("scroll");
    }
  }, [menuOpen]);

  return (
    <div
      id="navigation-mobile"
      className="fixed w-screen h-20 z-20 flex items-center
            bg-brand-blue-500 border-b-[1px] border-white lg:hidden"
    >
      <nav className="w-full px-4">
        <div className="w-full flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <button
              type="button"
              className=""
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? (
                <X className="w-8 h-8 text-white" />
              ) : (
                <List className="w-8 h-8 text-white" />
              )}
            </button>
            <span>
              <img
                src="./assets/images/logo.png"
                className="h-12"
                alt="Logo da ZupNet"
              />
            </span>
          </div>
          {!menuOpen && (
            <div className="flex gap-2">
              <a
                href="#customer-center"
                className="flex w-8 h-8 rounded-md justify-center items-center
                        text-white font-medium  text-md"
                aria-label="Central do cliente"
              >
                <User size={24} />
              </a>
              <a
                href="#contact"
                className="flex w-8 h-8 rounded-md justify-center items-center
                        text-white font-medium text-md"
                aria-label="Suporte técnico"
              >
                <WhatsappLogo size={24} />
              </a>
            </div>
          )}
        </div>

        <div className="transition-all duration-200">
          {menuOpen && (
            <div
              className="absolute top-[5rem] h-screen left-0 right-0
                                bottom-0 bg-white z-50 p-2 flex flex-col
                                items-center after:content-[''] after:w-6 after:h-6
                                after:bg-white after:absolute after:rotate-45 after:left-5 after:-top-3"
            >
              <ul
                id="menu"
                className="w-full text-brand-blue-600 text-base flex flex-col
                                    items-start mt-6 font-semibold"
              >
                {menuItens.map((menu, index) => (
                  <li
                    key={index}
                    className="w-full hover:bg-brand-blue-500
                                            hover:text-white px-2 py-2"
                  >
                    <a
                      className="w-full flex justify-center items-center"
                      onClick={() => setMenuOpen(!menuOpen)}
                      href={menu.url}
                    >
                      {menu.title}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                onClick={() => setMenuOpen(!menuOpen)}
                href="#customer-center"
                className="flex w-72 rounded-full justify-center items-center bg-brand-blue-500 text-white mt-14 p-4 font-bold"
              >
                <User size={24} />

                <span className="ml-2">Central do cliente</span>
              </a>
              <a
                onClick={() => setMenuOpen(!menuOpen)}
                href="#contact"
                className="flex w-72 rounded-full justify-center items-center bg-brand-blue-500 text-white mt-4 p-4 font-bold"
              >
                <WhatsappLogo size={24} />
                <span className="ml-2">Suporte técnico</span>
              </a>
              <div className="flex w-full justify-center mt-8 gap-6 items-center">
                <span>
                  <img src="/assets/icons/blue/facebook.svg" alt="Facebook" />
                </span>
                <span>
                  <img src="/assets/icons/blue/instagram.svg" alt="Instagram" />
                </span>
                <span>
                  <img src="/assets/icons/blue/youtube.svg" alt="Youtube" />
                </span>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
