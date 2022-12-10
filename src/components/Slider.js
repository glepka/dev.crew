import { Swiper, SwiperSlide } from "swiper/react";
import quote from "../images/quote.svg";
import manPhoto from "../images/man-photo.svg";
import "./Slider.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";

export default function Slider() {
  return (
    <section className="slider">
      <Swiper
        modules={[Navigation, Pagination]}
        pagination={{
          bulletClass: "slider__pag",
          bulletActiveClass: "slider__pag_active",
          clickable: true,
        }}
        navigation={{
          disabledClass: "slider__arrow_disabled",
          nextEl: ".slider__next-element",
          prevEl: ".slider__prev-element",
        }}
      >
        <button className="slider__next-element"></button>
        <button className="slider__prev-element"></button>

        <SwiperSlide>
          <div className="slider__container">
            <div className="slider__photo-container">
              <img
                src={manPhoto}
                alt="Фото человека"
                className="slider__photo"
              />
              <div className="slider__description">
                <div className="slider__description-gradient"></div>
                <h3 className="slider__name">Ronald Richards</h3>
                <p className="slider__subtitle">Product Manager</p>
              </div>
              <div className="slider__circle slider__circle_type_first"></div>
              <div className="slider__circle slider__circle_type_second"></div>
              <div className="slider__circle slider__circle_type_third"></div>
            </div>
            <div className="slider__text-container">
              <img className="slider__img" src={quote} alt="Ковычки" />
              <p className="slider__text">
                Incididunt cillum do sint sint enim ullamco id deserunt mollit
                qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                Do nulla velit labore occaecat do deserunt Lorem magna officia
                incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id
                qui ad.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__container">
            <div className="slider__photo-container">
              <img
                src={manPhoto}
                alt="Фото человека"
                className="slider__photo"
              />
              <div className="slider__description">
                <div className="slider__description-gradient"></div>
                <h3 className="slider__name">NAME</h3>
                <p className="slider__subtitle">Status</p>
              </div>
              <div className="slider__circle slider__circle_type_first"></div>
              <div className="slider__circle slider__circle_type_second"></div>
              <div className="slider__circle slider__circle_type_third"></div>
            </div>
            <div className="slider__text-container">
              <img className="slider__img" src={quote} alt="Ковычки" />
              <p className="slider__text">
                Incididunt cillum do sint sint enim ullamco id deserunt mollit
                qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                Do nulla velit labore occaecat do deserunt Lorem magna officia
                incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id
                qui ad.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider__container">
            <div className="slider__photo-container">
              <img
                src={manPhoto}
                alt="Фото человека"
                className="slider__photo"
              />
              <div className="slider__description">
                <div className="slider__description-gradient"></div>
                <h3 className="slider__name">NAME 2</h3>
                <p className="slider__subtitle">Status 2</p>
              </div>
              <div className="slider__circle slider__circle_type_first"></div>
              <div className="slider__circle slider__circle_type_second"></div>
              <div className="slider__circle slider__circle_type_third"></div>
            </div>
            <div className="slider__text-container">
              <img className="slider__img" src={quote} alt="Ковычки" />
              <p className="slider__text">
                Incididunt cillum do sint sint enim ullamco id deserunt mollit
                qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                Do nulla velit labore occaecat do deserunt Lorem magna officia
                incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id
                qui ad.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
