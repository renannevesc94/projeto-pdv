import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import styles from "./styles.module.css";
import { ArrowIcon } from "../icons";

type PropsCarousel = {
  children: React.ReactNode | React.ReactNode[];
};

export const Carousel = ({ children }: PropsCarousel) => {
  const childrenArray = Array.isArray(children) ? children : [children];
  return (
    <>
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: `.${styles.nextButton}`,
          prevEl: `.${styles.prevButton}`,
          disabledClass: `${styles.buttonDisabled}`,
          hiddenClass: `${styles.buttonHidden}`,
        }}
        slidesPerView={childrenArray.length > 5 ? 5 : childrenArray.length}
        spaceBetween={0}
      >
        {childrenArray.map((child, index) => (
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
