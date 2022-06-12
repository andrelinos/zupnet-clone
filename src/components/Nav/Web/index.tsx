import { FacebookLogo, InstagramLogo, YoutubeLogo } from "phosphor-react";
import { useState } from "react";
import { menuItens } from "~/services/api/menu";

export function Web() {
  const [btVisibility, setBtnVisibility] = useState(false);

  function hideNavOnScroll() {
    if (scrollY > 100) {
      document.getElementById("nav-top")?.classList.add("hide-nav-top");
      setBtnVisibility(true);
    } else {
      document.getElementById("nav-top")?.classList.remove("hide-nav-top");
      setBtnVisibility(false);
    }
  }
  window.addEventListener("scroll", hideNavOnScroll);

  return (
    <div
      className="hidden lg:fixed w-screen lg:flex justify-center items-center
                    flex-col bg-brand-blue-500 px-6 border-b-[1px] border-white
                    z-20"
    >
      <div id="nav-top" className="w-[100%] max-w-6xl transition-all">
        <div className="hidden w-[100%] max-w-6xl lg:flex justify-between items-center mx-auto h-14">
          <span className="text-base text-white">
            Converse com nossa central:{" "}
            <span className="font-semibold">
              (32) 9 9945-0833 | 9 9945-0800
            </span>
          </span>
          <span className="flex gap-4">
            <button type="button">
              <FacebookLogo
                size={32}
                className="text-white hover:text-brand-yellow-500 transition-all ease-linear"
              />
            </button>
            <button type="button" className="">
              <InstagramLogo
                size={32}
                className="text-white hover:text-brand-yellow-500 transition-all ease-linear"
              />
            </button>
            <button type="button" className="">
              <YoutubeLogo
                size={32}
                className="text-white hover:text-brand-yellow-500 transition-all ease-linear"
              />
            </button>
            <button
              type="button"
              className="rounded-full bg-white border-2 border-white text-brand-blue-500
                         font-medium py-1 px-4 text-sm hover:bg-brand-yellow-500 hover:text-brand-gray-800
                         transition-all ease-linear"
            >
              Central do assinante
            </button>
          </span>
        </div>
      </div>
      <nav className="w-[100%] max-w-6xl flex justify-between items-center mx-auto h-full">
        <span className="pb-2">
          <img className="h-12 my-2" src="./assets/images/logo.png" alt="" />{" "}
        </span>
        <ul className="flex items-center gap-2 font-semibold  h-[100%]">
          {menuItens.map((menu, index) => (
            <a
              key={index}
              href={menu.url}
              className="flex items-center text-white h-[100%] px-2 py-2 cursor-pointer
                        border-b-[1px] border-transparent hover:border-white transition-all
                        duration-200 hover:text-brand-yellow-500"
            >
              {menu.title}
            </a>
          ))}
          {btVisibility && (
            <button
              type="button"
              className="rounded-full bg-white border-2 border-white text-brand-blue-500
                         font-medium py-1 px-4 text-sm hover:bg-brand-yellow-500 hover:text-brand-gray-800
                         transition-all ease-linear"
            >
              Central do assinante
            </button>
          )}
        </ul>
      </nav>
    </div>
  );
}
