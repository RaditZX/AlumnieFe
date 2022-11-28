import { Form, Button } from "react-bootstrap";
import "../assets/style.css";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import App from "../App";
import ReactApexChart  from 'react-apexcharts'
import React, {useState} from 'react';
import Link from "react-router-dom"


export default function Dashboard() {

    const [state, setState] = useState({
        series: [100, 120, 50],
        options: {
          chart: {
            width: 480,
            type: 'donut',
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            colors: ['#5570F1', '#FFCC91', '#97A5EB']
          },
          chart: {
            width: '20%'
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                show: true
              }
            }
          }],
        },
      })

     const [state1, setState1] = useState({
          
        series: [{
            name: "Desktops",
            data: [1500, 1200, 1600, 1000, 1400, 1100]
        }],
        options: {
          chart: {
            height: 350,
            type: 'line',
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: 'Keterserapan Alumni',
            align: 'center',
            style: {
              fontSize:  '30px',
              fontWeight:  'bold',
              fontFamily:  undefined,
              color:  '#263238'
            },
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['2017', '2018', '2019', '2020', '2021', '2022'],
          },
          chart: {
            width: '100%'
        }
        },
      
      })
    
    return (
        <>
            <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
                <div className="d-flex">
                    <Sidebar />

                    <div className="d-flex1">
                        <Navbar />
                    
                        <div className="d-flex justify-content-center mb-4 " style={{marginLeft:"5vw"}}>
                            <div className="container-jumlah-component">
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
        
                            <div className="container-jumlah-component2">
                                <div className="container-jumlah-component-kelas2">
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

                            <div className="container-jumlah-component3">
                                <div className="container-jumlah-component-kelas3">
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
                        </div>

                        <div className="container-bawah">
                            <div className="container-diagram">
                                <div className="container-diagram-bulat">
                                    <div class="chart-wrap">
                                    <ReactApexChart 
                                    options={state.options} 
                                    series={state.series} 
                                    type="donut" style={{width:"50%"}} />
                                    </div>
                                </div>
                                
                                <div className="container-diagram-batang">
                                      <ReactApexChart 
                                          options={state1.options} 
                                          series={state1.series} 
                                          type="line" style={{width:"100%"}} />
                                </div>
                            </div>

                            <div className="container-keterserapan-alumni">
                                <h2 className="container-keterserapan-alumni-text1">
                                Keterserapan Alumni 
                                </h2>
                                <div className="d-flex">
                                  <div className="d-flex justify-content-center align-items-center ms-2">
                            `       <h3>1.</h3>
                                  </div>
                                  <div className="d-flex justify-content-center align-items-center ms-2">
                                  <img src={require("../assets/itb.png")} alt=""  />
                                  </div>
                                  <div className="d-flex justify-content-center align-items-center ms-2">
                                    <h2 className="nama-univ"> Institus Teknologi Bandung</h2>
                                  </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            
        </>
        
    )
}