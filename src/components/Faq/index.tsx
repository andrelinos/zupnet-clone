import {
  ArrowArcRight,
  Car,
  CaretDown,
  CaretRight,
  CaretUp,
  Clock,
  CurrencyDollar,
  Handshake,
  RocketLaunch,
  WifiSlash,
} from "phosphor-react";
import { useEffect, useRef, useState } from "react";
import { FAQs } from "../../services/api/accordion";

export function Faq() {
  function openAccordion(id: string) {
    if (
      document.getElementById(`accordion-${id}`)?.classList.contains("show")
    ) {
      document.getElementById(`accordion-${id}`)?.classList.remove("show");
    } else {
      document.getElementById(`accordion-${id}`)?.classList.add("show");
    }

    if (
      document.getElementById(`arrow-down-${id}`)?.classList.contains("hidden")
    ) {
      document.getElementById(`arrow-down-${id}`)?.classList.remove("hidden");
      document.getElementById(`arrow-up-${id}`)?.classList.add("hidden");
    } else {
      document.getElementById(`arrow-down-${id}`)?.classList.add("hidden");
      document.getElementById(`arrow-up-${id}`)?.classList.remove("hidden");
    }
  }

  return (
    <section id="faq">
      <div className="flex w-full flex-col items-center text-white bg-brand-blue-500 py-32 px-6">
        <h1 className="py-6 font-bold text-4xl text-center text-brand-yellow-500">
          Dúvidas frequentes
        </h1>
        <div
          className="w-full h-auto max-w-6xl flex flex-wrap flex-col lg:flex-row items-center lg:justify-center gap-4
                        mx-auto pt-6"
        >
          {FAQs?.map(
            (item, index) =>
              item?.question?.length && (
                <div
                  key={index}
                  className="flex w-full h-auto text-brand-gray-800 flex-col transition-all ease-in-out "
                >
                  <button
                    type="button"
                    className="flex bg-white px-3 py-2 text-brand-gray-700 justify-between font-bold"
                    onClick={() => openAccordion(index.toString())}
                  >
                    <span className="text-left">{item.question}</span>

                    <CaretUp
                      id={"arrow-up-" + index}
                      className="text-lg hidden"
                    />

                    <CaretDown
                      id={"arrow-down-" + index}
                      className="text-lg "
                    />
                  </button>

                  <div
                    id={"accordion-" + index}
                    className="h-0 text-lg overflow-hidden"
                  >
                    <p className="text-white bg-brand-blue-600 p-4 pb-6 border-2 border-white -mt-1 border-t-transparent">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
}
