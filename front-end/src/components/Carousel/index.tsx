import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import styles from "./styles.module.css";
import { ArrowIcon } from "../icons";

type PropsCarousel = {
  children: React.ReactNode[];
};

export const Carousel = ({ children }: PropsCarousel) => {
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.${styles.nextButton}`,
          prevEl: `.${styles.prevButton}`,
          disabledClass: `${styles.buttonDisabled}`,
        }}
        slidesPerView={children.length > 5 ? 5 : children.length}
        spaceBetween={0}
      >
        {children.map((child, index) => (
          <SwiperSlide key={index} className={styles.swiperSlide}>
            {child}
          </SwiperSlide>
        ))}
      </Swiper>
      <button className={styles.nextButton}>
        <ArrowIcon />
      </button>
      <button className={styles.prevButton}>
        <ArrowIcon />
      </button>
    </>
  );
};
