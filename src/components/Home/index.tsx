import { Slider } from "../Slider";

export function Home() {
  return (
    <section id="home">
      <div
        className="flex w-full h-full z-0 pt-[5.0625rem] lg:pt-[8.125rem]
                    bg-brand-gray-800"
      >
        <Slider />
      </div>
    </section>
  );
}
