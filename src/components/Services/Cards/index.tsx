import { WifiHigh } from "phosphor-react";

interface Props {
  megabytes: string;
  price: string;
}

export function CardsServices({ megabytes, price }: Props) {
  return (
    <div
      className="flex w-full flex-col gap-1 items-center p-4 border-2
                  border-brand-yellow-500 rounded-md shadow-md shadow-brand-yellow-500
                  lg:w-[460px] hover:bg-brand-gray-800 hover:bg-opacity-30 transition-all"
    >
      <WifiHigh size="44" />
      <h1
        className="w-full font-bold text-4xl lg:text-5xl py-2 text-center border-b-[1px]
                  border-b-brand-blue-300 text-shadow"
      >
        {megabytes} MEGA
      </h1>
      <p className="w-full border-b-[1px] border-b-brand-blue-300 text-center py-1">
        INSTALAÇÃO GRÁTIS
      </p>
      <p className="w-full border-b-[1px] border-b-brand-blue-300 text-center py-1">
        Wi-Fi INCLUSO
      </p>
      <p className="w-full border-b-[1px] border-b-brand-blue-300 text-center py-1">
        SUPORTE TÉCNICO 24H
      </p>
      <p className="w-full border-b-[1px] border-b-brand-blue-300 text-center py-1">
        SEM FRANQUIA DE CONSUMO
      </p>
      <h1 className="w-full font-bold text-4xl py-4 text-brand-yellow-600 text-center text-shadow">
        R${price}/mês
      </h1>
      <button
        className="w-full h-12 text-center bg-brand-yellow-500 text-brand-gray-700
                        text-xl font-bold rounded-md hover:bg-brand-yellow-600"
      >
        Contratar agora
      </button>
    </div>
  );
}
