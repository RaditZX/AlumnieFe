import { Form, Button } from "react-bootstrap";
import "../assets/style.css";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import App from "../App";
import React, {useState} from 'react';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


export default function Dashboard() {

    
    const [state, setState] = useState({
        series: [100, 120, 50, 50],
        options: {
          chart: {
            width: 380,
            type: 'donut',
          },
          dataLabels: {
            enabled: false
          },
          fill: {
            colors: ['#5570F1', '#FFCC91', '#97A5EB']
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
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
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
            align: 'center'
          },
          grid: {
            row: {
              colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
              opacity: 0.5
            },
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
          }
        },
      
      })
    
    return (
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
                <div className="d-flex">
                    <Sidebar />

                    <div className="d-flex1">
                        <Navbar />
                    
                        <div className="container-jumlah">
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

                        <div className="container-bawah-between">
                            <Button size="sm" style={{ color: "black", borderColor: "#eef0fa", backgroundColor: "#eef0fa", height: "30px" }}>+</Button>{' '}
                        </div>

                        <div className="container-bawah">
                            <div className="container-table">
                                <div className="container-table-top"> <h6>Data Alumni</h6>
                                    <div className="container-table-top-right">
                                        <div>
                                            <input type="text" style= {{ marginTop: "0px", width: "200px", height: "30px" }} placeholder="Search.."/>
                                            {/* <Form.Control type="text" style= {{ marginTop: "0px", width: "200px", height: "30px" }} placeholder="Search..." /> */}
                                            {/* <i className="fa fa-magnifying-glass fa-lg fa-fw" aria-hidden="true"></i> */}
                                        </div>
                                        <Button size="sm" style={{ color: "black", borderColor: "black", backgroundColor: "white", marginLeft: "1rem", height: "30px" }}>Filter</Button>{' '}
                                        <Button size="sm" style={{ color: "black", borderColor: "black", backgroundColor: "white", marginLeft: "1rem", height: "30px" }}>Filter</Button>{' '}
                                        <Button size="sm" style={{ color: "black", borderColor: "black", backgroundColor: "white", marginLeft: "1rem", height: "30px" }}>Share</Button>{' '}
                                        <Button size="sm" style={{ color: "black", borderColor: "black", backgroundColor: "white", marginLeft: "1rem", height: "30px" }}>Bulk Action</Button>{' '}
                                    </div>
                                </div>
                            <div className="container-table-item">
                            <Table>
                                <thead>
                                    <tr>
                                    <th>NISN</th>
                                    <th>Nama Alumni</th>
                                    <th>Kelas</th>
                                    <th>Angkatan</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>2021118600</td>
                                    <td>John Sterling</td>
                                    <td>XII RPL 1</td>
                                    <td>2022</td>
                                    <td>Kuliah</td>
                                    <td>--</td>
                                    </tr>
                                    <tr>
                                    <td>2021118600</td>
                                    <td>John Sterling</td>
                                    <td>XII RPL 1</td>
                                    <td>2022</td>
                                    <td>Kuliah</td>
                                    <td>--</td>
                                    </tr>
                                    <tr>
                                    <td>2021118600</td>
                                    <td>John Sterling</td>
                                    <td>XII RPL 1</td>
                                    <td>2022</td>
                                    <td>Kuliah</td>
                                    <td>--</td>
                                    </tr>
                                </tbody>
                            </Table>
                            </div>
                                <div container-table-bottom>
                                    <div>
                                        <DropdownButton
                                            id="dropdown-button-dark-example2"
                                            variant="light"
                                            menuVariant="light"
                                            title="10"
                                            className="mt-2"
                                            size="sm"
                                            style={{ margin: "1rem" }}
                                        >
                                            <Dropdown.Item href="#/action-1" active>
                                            10
                                            </Dropdown.Item>
                                            <Dropdown.Item href="#/action-2">10</Dropdown.Item>
                                            <Dropdown.Item href="#/action-3">10</Dropdown.Item>
                                        </DropdownButton>
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