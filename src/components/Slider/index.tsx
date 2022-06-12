import { CaretLeft, CaretRight } from "phosphor-react";
import { useEffect, useRef, useState } from "react";

import { imageSlider } from "~/services/api/data";

import styles from "./styles.module.css";

export function Slider() {
  const [value, setValue] = useState(0);
  const [fadeClass, setFadeClass] = useState(styles.mFadeIn);

  const isFadingRef = useRef(false);

  // updated all setValue to updateValue
  // this will fadeOut the element and after 0.5s
  // update the value
  const updateValue = (_value: number) => {
    // only alow to update while element is not fading
    if (isFadingRef.current === false) {
      isFadingRef.current = true;
      setFadeClass(styles.mFadeOut);
      setTimeout(() => {
        setValue(_value);
      }, 500);
    }
  };

  useEffect(() => {
    // this will trigger fadeIn once value is updated
    setFadeClass(styles.mFadeIn);

    // allow value to be updated
    isFadingRef.current = false;

    if (imageSlider.length) {
      const interval = setInterval(() => {
        if (value < imageSlider.length - 1) {
          // using updateValue instead of setValue
          updateValue(value + 1);
        } else {
          updateValue(0);
        }
      }, 2000 * 6); // 6 segundos para alterar a imagem

      return () => {
        clearInterval(interval);
      };
    }
  }, [value]);

  function ImagePrevious() {
    if (value > 0) {
      updateValue(value - 1);
    } else {
      updateValue(imageSlider.length - 1);
    }
  }
  function ImageForward() {
    if (value < imageSlider.length - 1) {
      updateValue(value + 1);
    } else {
      updateValue(0);
    }
    console.log("Image forward");
  }

  return (
    <div
      className="relative flex w-full h-full z-0 justify-center items-center self-center
                overflow-hidden object-cover"
    >
      <button
        type="button"
        className="hidden lg:flex absolute hover:cursor-pointer z-10 w-28 h-28
                justify-center items-center -left-6 rounded-full"
        onClick={ImagePrevious}
      >
        <CaretLeft
          size={44}
          className="text-shadow-white object-cover bg-brand-blue-600 bg-opacity-10"
        />
      </button>
      <img
        className={`w-full h-full ${[
          styles.loadImage,
          styles.image,
          fadeClass,
        ].join(" ")}`}
        src={`${imageSlider[value].image}`}
        alt={`${imageSlider[value].id}`}
      />
      {/* <div className={[styles.information].join(" ")}>
        <span className={styles.title}>{`${imageSlider[value].title}`}</span>
        <p
          className={styles.text}
          max-lines={2}
        >{`${imageSlider[value].text}`}</p>
      </div> */}
      <button
        type="button"
        className="hidden lg:flex absolute hover:cursor-pointer z-10 w-28 h-28
        justify-center items-center -right-6 rounded-full"
        onClick={ImageForward}
      >
        <CaretRight
          size={44}
          className="text-shadow-white bg-brand-blue-600 bg-opacity-10"
        />
      </button>
    </div>
  );
}
