import Table from "react-bootstrap/Table";
import { useEffect,useState } from "react";
import axios from "axios";
export default function AlumniTabKerja(){
    const [kerja,setKerja] = useState([])

    const getPerusahaan=()=>{
        axios
        .get(
          process.env.REACT_APP_API_LINK + `api/perusahaan/perusahaanData`,
          {
            headers: {
              Authorization: "JWT" + " " + localStorage.getItem("token"),
            },
          }
        )
        .then((res) => {
          console.log(res.data)
          setKerja(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  
    useEffect(() => {
     getPerusahaan()
    }, []);

    return(
        <div className="container-table" style={{height:'100vh'}}>
          <div className="container-table-top d-flex justify-content-center" >
            {" "}
            <h6>Data Perusahaan</h6>
            
          </div>
          <div className="container-table-item">
            <Table>
              <thead>
                <tr>
                <th>No</th>
                  <th>Perusahaan</th>
                  <th>Jumlah Alumni</th>
                </tr>
              </thead>
              <tbody>
              {kerja.map((kerja,index)=>{
                  return(
                  <tr>
                    <td>{index + 1}</td>
                    <td>{kerja.perusahaan}</td>
                    <td className="d-flex justify-content-center">{kerja.jumlah_alumni}</td>
                  </tr>
                  )
                })}
            
              </tbody>
            </Table>
          </div>
          <div className="d-flex justify-content-center p-3">
            <div className="btn-group">
              {parseInt(2) != 1 ? (
                <button className="btn" >
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
              ) : null}
              <button className="btn" >
                {1}
              </button>
              <button className="btn" >
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

    )
}