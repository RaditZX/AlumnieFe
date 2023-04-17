import "../assets/style.css";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import Loading from "../component/laoding";
import ReactApexChart from "react-apexcharts";
import Chart from 'react-apexcharts'
import React, { useState, useEffect, useContext } from "react";
import AlumniSlider from "../component/alumniSlider";
import axios from "axios";
import { AuthContext } from "../auth";
import { useNavigate } from "react-router-dom";


export default function Dashboard() {

  
  const [dataKuliah, setDataKuliah] = useState();
  const [dataKerja, setDataKerja] = useState();
  const [dataWirausaha, setDataWirausaha] = useState();
  const [dataTunggu,setDataTunggu] = useState()
  const [tahun1,setTahun1] = useState()
  const [tahun2,setTahun2] = useState()
  const [tahun3,setTahun3] = useState()
  const [tahun4,setTahun4] = useState()
  const [tahun5,setTahun5] = useState()
  const [tahun6,setTahun6] = useState()
  const [tki,setTki] = useState()
  const [elek,setElek] = useState()
  const [listrik,setListrik] = useState()
  const { currentUser } = useContext(AuthContext);
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate();
  const date = new Date()

  const getStatusAnalytics = () => {
    axios
      .get(
        process.env.REACT_APP_API_LINK + `api/analyticsStatus/statusAnalytics`,
        {
          headers: {
            Authorization: "JWT" + " " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setDataKuliah(res.data.data.kuliah);
        setDataKerja(res.data.data.kerja);
        setDataWirausaha(res.data.data.wirausaha);
        setDataTunggu(res.data.data.masa_tunggu)


      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getJumlahAnalytics = () => {
    axios
      .get(
        process.env.REACT_APP_API_LINK + 'api/analyticsStatus/jumlahAlumniAnalytics',
        {
          headers: {
            Authorization: "JWT" + " " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setTahun1(res.data.data.tahunPertama)
        setTahun2(res.data.data.tahunKedua)
        setTahun3(res.data.data.tahunKetiga)
        setTahun4(res.data.data.tahunKeempat)
        setTahun5(res.data.data.tahunKelima)
        setTahun6(res.data.data.tahunKeenam)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getJumlahKelamin = () => {
    axios
      .get(
        process.env.REACT_APP_API_LINK + 'api/analyticsStatus/jumlahAlumniProdi',
        {
          headers: {
            Authorization: "JWT" + " " + localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        setTki(res.data.data.tki)
        setElek(res.data.data.elektronika)
        setListrik(res.data.data.listrik)
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>setLoading(false),5000)
    getStatusAnalytics();
    getJumlahAnalytics();
    getJumlahKelamin()

  }, []);

  if(localStorage.getItem('token')){
    localStorage.setItem('user',true)
  }

  const [state, setState] = useState({
    options: {
      labels: ["Kuliah", "Kerja", "Wirausaha","Masa Tunggu"],
      chart: {
        width: 12,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      chart: {
        width: "20%",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  });

  const [state1, setState1] = useState({
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Keterserapan Alumni",
        align: "center",
        style: {
          fontSize: "30px",
          fontWeight: "bold",
          fontFamily: undefined,
          color: "#263238",
        },
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [date.getFullYear() - 5, date.getFullYear() - 4, date.getFullYear() - 3, date.getFullYear() - 2, date.getFullYear() - 1,date.getFullYear() ],
      },
      chart: {
        width: "100%",
      },
    },
  });

  const [state2, setState2] = useState({
    options: {
      chart: {
        id: 'apexchart-example'
      },
      xaxis: {
        categories: ["TKI","ELEKTRONIKA","LISTRIK"]
      }
    },
    chart: {
      width: "100%",
      height: "100vh"
    },
  })


  return (
    <>
      {loading ? <Loading loading={loading}/> :
      <div className="container-fluid" style={{ margin: "0", padding: "0",height:"max-content" }}>
      
        <div className="d-flex">
          <Sidebar />
          <div className="d-flex1">
            <Navbar title="Dashboard" />
            <AlumniSlider />

            <div className="container-bawah">
              <div className="container-diagram">
                <div className="container-diagram-bulat">
                  <div class="chart-wrap">
                    {loading ? "":
                    <ReactApexChart
                      options={state.options}
                      series={[dataKuliah, dataKerja, dataWirausaha,dataTunggu]}
                      type="donut"
                      style={{ width: "50%" }}
                    />
  }
                  </div>
                </div>

                <div className="container-diagram-batang">
                  <ReactApexChart
                    options={state1.options}
                    series={[{data:[tahun1,tahun2,tahun3,tahun4,tahun5,tahun6]}]}
                    type="line"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>

              <div className="container-keterserapan-alumni align-items-center justify-content-center">
                <Chart options={state2.options} series={[{data:[tki,elek,listrik]}]} type="bar"  style={{ width: "100%"}} height="100%" />
              </div>
            </div>
          </div>
        </div>
      </div>
}
    </>
  );
}
