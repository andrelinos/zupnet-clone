import {
  Envelope,
  FileText,
  Headset,
  MapPin,
  MarkerCircle,
  Phone,
  User,
  WhatsappLogo,
} from "phosphor-react";

export function SelfService() {
  return (
    <section id="self-service">
      <div className="flex w-full flex-col items-center text-brand-yellow-500 bg-brand-blue-600 py-32 px-6">
        <h1 className="py-6 font-bold text-4xl text-center text-brand-yellow-500">
          Autoatendimento
        </h1>
        <div
          className="w-full h-auto max-w-6xl flex flex-wrap flex-col lg:flex-row items-center lg:justify-center gap-6
                    mx-auto pt-6"
        >
          <button
            className="flex w-full lg:w-[20%] hover:bg-brand-yellow-500
                          hover:text-brand-gray-800 flex-col items-center gap-3
                          rounded-md border-[1px] border-brand-yellow-500 p-2
                          transition-all ease-linear"
          >
            <User size={44} />
            <h3 className="font-bold text-lg">Área do cliente</h3>
          </button>
          <button
            className="flex w-full lg:w-[20%] hover:bg-brand-yellow-500
                          hover:text-brand-gray-800 flex-col items-center gap-3
                          rounded-md border-[1px] border-brand-yellow-500 p-2
                          transition-all ease-linear"
          >
            <FileText size={44} />
            <h3 className="font-bold text-lg">2ª vida do boleto</h3>
          </button>
          <button
            className="flex w-full lg:w-[20%] hover:bg-brand-yellow-500
                          hover:text-brand-gray-800 flex-col items-center gap-3
                          rounded-md border-[1px] border-brand-yellow-500 p-2
                          transition-all ease-linear"
          >
            <Headset size={44} />
            <h3 className="font-bold text-lg">Suporte técnico</h3>
          </button>
          <button
            className="flex w-full lg:w-[20%] hover:bg-brand-yellow-500
                          hover:text-brand-gray-800 flex-col items-center gap-3
                          rounded-md border-[1px] border-brand-yellow-500 p-2
                          transition-all ease-linear"
          >
            <WhatsappLogo size={44} />
            <h3 className="font-bold text-lg">Atendimento ao cliente</h3>
          </button>
        </div>
      </div>
    </section>
  );
}
