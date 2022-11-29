import { Form, Button } from "react-bootstrap";
import "../assets/style.css";
import Sidebar from "../component/sidebar";
import Navbar from "../component/navbar";
import App from "../App";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import AlumniSlider from "../component/alumniSlider";
import { Link } from "react-router-dom";

export default function Tabelalumni() {
  const [currentPage, setCurrentPage] = useState(
    parseInt("1") || sessionStorage.getItem("page")
  );

  const [state, setState] = useState({
    series: [100, 120, 50, 50],
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        colors: ["#5570F1", "#FFCC91", "#97A5EB"],
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
    series: [
      {
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
      },
    ],
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
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
        ],
      },
    },
  });

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>
      <div className="container-fluid" style={{ margin: "0", padding: "0" }}>
        <div className="d-flex">
          <Sidebar />

          <div className="d-flex1">
            <Navbar />
            <AlumniSlider />

            <div className="container-bawah-between">
            <Link to="/Add">
              <Button
                size="sm"
                style={{
                  color: "black",
                  borderColor: "#eef0fa",
                  backgroundColor: "#eef0fa",
                  height: "30px",
                }}
              >
                +
              </Button>{" "} </Link>
            </div>

            <div className="container-tabel-bawah">
              <div className="container-table">
                <div className="container-table-top">
                  {" "}
                  <h6>Data Alumni</h6>
                  <div className="container-table-top-right">
                    <div>
                      <input
                        type="text"
                        style={{
                          marginTop: "0px",
                          width: "200px",
                          height: "30px",
                        }}
                        placeholder="Search.."
                      />
                    </div>
                    <Button
                      size="sm"
                      style={{
                        color: "black",
                        borderColor: "black",
                        backgroundColor: "white",
                        marginLeft: "1rem",
                        height: "30px",
                      }}
                    >
                      Filter
                    </Button>{" "}
                    <Button
                      size="sm"
                      style={{
                        color: "black",
                        borderColor: "black",
                        backgroundColor: "white",
                        marginLeft: "1rem",
                        height: "30px",
                      }}
                    >
                      Filter
                    </Button>{" "}
                    <Button
                      size="sm"
                      style={{
                        color: "black",
                        borderColor: "black",
                        backgroundColor: "white",
                        marginLeft: "1rem",
                        height: "30px",
                      }}
                    >
                      Share
                    </Button>{" "}
                    <Button
                      size="sm"
                      style={{
                        color: "black",
                        borderColor: "black",
                        backgroundColor: "white",
                        marginLeft: "1rem",
                        height: "30px",
                      }}
                    >
                      Bulk Action
                    </Button>{" "}
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
                <div className="d-flex justify-content-center p-3">
                  <div className="btn-group">
                    <button className="btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-left-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
                      </svg>
                    </button>
                    <button className="btn">{currentPage}</button>
                    <button className="btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-caret-right-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
