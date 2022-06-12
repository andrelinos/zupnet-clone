import { CaretDown, CaretUp } from "phosphor-react";

export function Contact() {
  return (
    <section id="contact">
      <div className="flex w-full flex-col items-center text-white bg-brand-blue-600 py-32 px-6">
        <h1 className="py-6 font-bold text-4xl text-center text-brand-yellow-500">
          Fale conosco
        </h1>
        <div
          className="w-full h-auto max-w-6xl flex flex-wrap flex-col lg:flex-row items-center lg:justify-center gap-4
                        mx-auto pt-6"
        >
          <div
            className="flex w-full h-full max-w-6xl gap-4 flex-col items-center
                       lg:justify-center lg:flex-row"
          >
            <div className="flex-1 lg:h-[33.75rem]">
              <img
                className="object-none object-[-500px,30%] lg:object-[-350px,50%]
                          rounded-md w-full h-72 lg:h-[33.75rem]"
                src="assets/images/slider-modelo.jpg"
                alt="Imagem modelo"
              />
            </div>
            <form
              id="contact_form"
              action="#action-contact"
              method="POST"
              encType="multipart/form-data"
              className="flex w-full lg:max-w-lg flex-col gap-4 lg:border-[1px] border-white
                        rounded-md lg:p-4 flex-1"
            >
              <div className="row ">
                <label className="required w-full" htmlFor="name">
                  Seu nome:
                </label>
                <br />
                <input
                  id="name"
                  className="input required w-full h-14 rounded-md px-4 text-brand-gray-800
                            capitalize text-xl"
                  placeholder="Informe seu nome..."
                  name="name"
                  type="text"
                  size={30}
                  required
                />
                <br />
                <span id="name_validation" className="error_message" />
              </div>
              <div className="row">
                <label className="required" htmlFor="email">
                  Se e-mail:
                </label>
                <br />
                <input
                  id="email"
                  className="input required w-full h-14 rounded-md px-4 text-brand-gray-800
                            capitalize text-xl"
                  placeholder="Informe seu e-mail..."
                  name="email"
                  type="email"
                  size={30}
                  autoCapitalize="off"
                  required
                />
                <br />
                <span id="email_validation" className="error_message" />
              </div>
              <div className="row">
                <label className="required" htmlFor="message">
                  Sua mensagem:
                </label>
                <br />
                <textarea
                  id="message"
                  className="input w-full rounded-md text-brand-gray-800 px-4 py-2
                            text-xl"
                  name="message"
                  placeholder="Escreva sua mensagem..."
                  rows={7}
                  cols={30}
                  required
                ></textarea>
                <br />
                <span id="message_validation" className="error_message"></span>
              </div>

              <button
                id="submit_button"
                type="submit"
                className="bg-brand-yellow-500 h-14 rounded-md text-brand-gray-800
                          font-bold text-lg hover:bg-brand-yellow-600 transition-all"
                value="Enviar"
              >
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
