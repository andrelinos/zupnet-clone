export function CustomerCenter() {
  return (
    <section id="customer-center">
      <div className="flex w-full flex-col items-center text-white bg-brand-gray-700 py-32 px-6">
        <h1 className="py-6 font-bold text-4xl text-center text-brand-yellow-500">
          Central do cliente
        </h1>
        <div
          className="w-full h-auto max-w-6xl flex flex-wrap flex-col lg:flex-row items-center lg:justify-center gap-4
                        mx-auto pt-6"
        >
          <div className="flex w-ful flex-col max-w-lg overflow-hidden">
            <h2 className="text-center text-lg font-semibold text-brand-blue-300 py-4">
              Seja bem vindo!
            </h2>
            <p className="max-w-md">
              Nossa CENTRAL DO ASSINANTE foi desenvolvida especialmente para
              você!
            </p>
          </div>
          <form
            id="contact_form"
            action="#action-contact"
            method="POST"
            encType="multipart/form-data"
            className="flex w-full max-w-lg flex-col gap-4 border-[1px] border-white
                        rounded-md p-4 flex1"
          >
            <div className="row ">
              <label className="required w-full" htmlFor="name">
                Informe seu CPF/CNPJ:
              </label>
              <br />
              <input
                id="name"
                className="input required w-full h-10 rounded-md px-4 text-brand-gray-800 capitalize"
                placeholder="Informe seu nome..."
                name="name"
                type="text"
                size={30}
              />
              <br />
              <span id="name_validation" className="error_message" />
            </div>

            <button
              id="submit_button"
              type="submit"
              className="bg-brand-yellow-500 h-12 rounded-md text-brand-gray-800
                          font-bold text-lg hover:bg-brand-yellow-600 transition-all"
              value="Enviar"
            >
              Acessar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
