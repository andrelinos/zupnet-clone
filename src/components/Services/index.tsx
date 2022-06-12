import {
  Envelope,
  FileText,
  Headset,
  MapPin,
  MarkerCircle,
  Phone,
  User,
  WhatsappLogo,
  WifiHigh,
} from "phosphor-react";
import { CardsServices } from "./Cards";

export function Services() {
  return (
    <section id="services">
      <div className="flex w-full flex-col items-center text-brand-yellow-500 bg-brand-gray-700 py-32 px-6">
        <h1 className="py-6 font-bold text-4xl text-center text-brand-yellow-500">
          Conheça nossos planos e serviços
        </h1>
        <div
          className="w-full h-auto max-w-6xl flex flex-wrap flex-col lg:flex-row
                    items-center lg:justify-center gap-6 mx-auto pt-6"
        >
          <CardsServices megabytes="100" price="69,90" />
          <CardsServices megabytes="250" price="99,90" />
          <CardsServices megabytes="400" price="119,90" />
          <CardsServices megabytes="500" price="149,90" />
        </div>
      </div>
    </section>
  );
}
