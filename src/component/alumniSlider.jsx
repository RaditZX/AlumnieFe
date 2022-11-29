import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";

export default function AlumniSlider() {
  SwiperCore.use([Autoplay]);
  return (
    <div
      className="d-flex  py-4 px-4 justfy-content-center align-items-center "
      id="containerSlider"
      style={{marginLeft:"5%"}}
    >
      <Swiper
        modules={[Navigation]}
        slidesPerView={3}
        spaceBetween={10}
        navigation
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <div className="container-jumlah-component ">
            <div className="container-jumlah-component-kelas">
              <div className="jumlah-alumni">
                <h3 className="jumlah">Jumlah Alumni</h3>
                <div className="orang1">
                  <h2 className="orang">90</h2>
                  <h4 className="orangg">orang</h4>
                </div>
              </div>
              <div className="orang-alumni">
                <h2 className="alumni">RPL</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-jumlah-component2">
            <div className="container-jumlah-component-kelas">
              <div className="jumlah-alumni2">
                <h3 className="jumlah">Jumlah Alumni</h3>
                <div className="orang1">
                  <h2 className="orang">90</h2>
                  <h4 className="orangg">orang</h4>
                </div>
              </div>
              <div className="orang-alumni">
                <h2 className="alumni">MM</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="container-jumlah-component3">
            <div className="container-jumlah-component-kelas">
              <div className="jumlah-alumni2">
                <h3 className="jumlah">Jumlah Alumni</h3>
                <div className="orang1">
                  <h2 className="orang">90</h2>
                  <h4 className="orangg">orang</h4>
                </div>
              </div>
              <div className="orang-alumni">
                <h2 className="alumni">TKJ</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
