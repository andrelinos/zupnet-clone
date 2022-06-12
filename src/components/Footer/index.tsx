import { Envelope, MapPin, MarkerCircle, Phone } from "phosphor-react";

export function Footer() {
  return (
    <section id="footer">
      <div className="flex w-full flex-col items-center text-brand-blue-500 bg-brand-gray-800 py-32 px-6">
        <div
          className="w-full h-auto max-w-6xl flex flex-col lg:flex-row justify-between items-center gap-6
                        mx-auto pt-6"
        >
          <span className="max-w-sm ">
            <img
              className="w-full"
              src="./assets/images/logo.png"
              alt="Logo da ZupNet"
            />
          </span>
          <div className="my-6 border p-4 rounded-md border-brand-yellow-600">
            <h3 className="font-bold text-xl text-brand-yellow-600 text-center mb-4">
              INFORMAÇÕES DE CONTATO
            </h3>
            <div className="flex flex-col max-w-xs text-white text-center leading-7 gap-3">
              <span className="flex items-center">
                <Phone size={32} className="mr-2 text-brand-yellow-500" /> (32)
                9 9945-0833 | 9 9945-0800
              </span>
              <span className="flex items-center border-b-[1px] border-t-[1px] border-brand-blue-500 py-2">
                <Envelope size={32} className="mr-2 text-brand-yellow-500" />{" "}
                contato@zupnet.net
              </span>
              <span className="flex items-center text-left">
                <MapPin size={56} className="mr-2 text-brand-yellow-500" /> Rua
                Dr. Olímpio Teixeira, 137 Centro Carangola – MG Cep: 36800-000
              </span>
            </div>
          </div>
          <div
            className="bg-brand-blue-600 h-36 border-[1px] rounded-md border-white
                          overflow-hidden hover:border-brand-yellow-600"
          >
            <div
              className="fb-page"
              data-href="https://www.facebook.com/zupnett"
              data-width="380"
              data-hide-cover="false"
              data-show-facepile="false"
            >
              <iframe
                src={`https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fzupnett&tabs&width=300&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId" width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share`}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-brand-blue-600text-center">
        <span className="bg-brand-gray-800 p-4 text-brand-yellow-600 text-center mt-[1px]">
          Todos os direitos reservados Copyright © 2022
        </span>
        <span className=" bg-brand-gray-800 text-center py-3 text-white">
          Desenvolvido por{" "}
          <a
            href="https://andrelino.dev"
            target="_blank"
            title="Andrelino Silva"
            className="hover:underline hover:underline-offset-8 transition-all ease-out"
          >
            Andrelino Silva
          </a>
        </span>
      </div>
    </section>
  );
}
