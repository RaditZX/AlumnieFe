import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function AlumniSlider() {
  SwiperCore.use([Autoplay]);
  const [rpl,setRPL] = useState("")
  const [mm,setMM] = useState("")
  const [tkj,setTKJ] = useState("")
  const [toi,setTOI] = useState("")
  const [titl,setTITL] = useState("")
  const [av,setAV] = useState("")
  
  const getTKIAnalytics = () => {
    axios
      .get(process.env.REACT_APP_API_LINK + `api/analyticsJurusan/analyticsTKI`, {
        headers: { "Authorization": "JWT" + " " + localStorage.getItem('token') }
        
      }).then((res) => {
        console.log(res.data);
        setRPL(res.data.data.RPL);
        setMM(res.data.data.MM);
        setTKJ(res.data.data.TKJ);
      })
      .catch((err) => {
        console.log(err);
      });
    }

    const getListrikAnalytics = () => {
      axios
        .get(process.env.REACT_APP_API_LINK + `api/analyticsJurusan/analyticsLISTRIK`, {
          headers: { "Authorization": "JWT" + " " + localStorage.getItem('token') }
          
        }).then((res) => {
          console.log(res.data);
          setTOI(res.data.data.TOI)
          setTITL(res.data.data.TITL)
        })
        .catch((err) => {
          console.log(err);
        });
      }
      
    const getElektroAnalytics = () => {
      axios
        .get(process.env.REACT_APP_API_LINK + `api/analyticsJurusan/analyticsELEKTRO`, {
          headers: { "Authorization": "JWT" + " " + localStorage.getItem('token') }
          
        }).then((res) => {
          console.log(res.data);
          setAV(res.data.data.AV)
        })
        .catch((err) => {
          console.log(err);
        });
      }
  

    useEffect(() => {
      getTKIAnalytics();
      getListrikAnalytics();
      getElektroAnalytics();
    }, []);
  
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
                  <h2 className="orang">{rpl}</h2>
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
                  <h2 className="orang">{mm}</h2>
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
                  <h2 className="orang">{tkj}</h2>
                  <h4 className="orangg">orang</h4>
                </div>
              </div>
              <div className="orang-alumni">
                <h2 className="alumni">TKJ</h2>
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
                  <h2 className="orang">{toi}</h2>
                  <h4 className="orangg">orang</h4>
                </div>
              </div>
              <div className="orang-alumni">
                <h2 className="alumni">TOI</h2>
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
                  <h2 className="orang">{titl}</h2>
                  <h4 className="orangg">orang</h4>
                </div>
              </div>
              <div className="orang-alumni">
                <h2 className="alumni">TITL</h2>
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
                  <h2 className="orang">{av}</h2>
                  <h4 className="orangg">orang</h4>
                </div>
              </div>
              <div className="orang-alumni">
                <h2 className="alumni">AV</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
