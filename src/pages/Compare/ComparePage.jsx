import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import { server } from "../../api";
import ExportCsvComponent from "../../components/ExportCSV/ExportCsvComponent";
import { Link } from "react-router-dom";

export default function ComparePage() {
  const mfgdate = moment().format("YYYY-MM-DD");
  const [results, setResults] = useState([]);

  useEffect(() => {
    getCompare();
  }, []);

  const getCompare = async () => {
    const res = await axios.get(server.API_GET_COMPARE);
    setResults(res.data);
  };

  return (
    <>
      <section className="content">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Result</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Result</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">Scrap Compare Smart Weight</h3>
          </div>
          <div className="card-body">
            <ExportCsvComponent csvData={results} fileName={mfgdate} />
            <table className="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Control</th>
                  <th>Name</th>
                  <th>Reel</th>
                  <th>Weight Scrap</th>
                  <th>Weight Smart Weight</th>
                  <th>Datetime</th>
                </tr>
              </thead>
              <tbody>
                {results.length > 0 ? (
                  results.map((result, i) => (
                    <tr key={i}>
                      <td className="text-center">{i + 1}</td>
                      <td className="text-center">{result.Control}</td>
                      <td className="text-center">{result.Name}</td>
                      <td className="text-center">{result.Reel}</td>
                      <td className="text-center">{result.Weight}</td>
                      <td className="text-center">{result.weight_mc}</td>
                      <td className="text-center">{result.Shiftto}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={11} className="text-center">
                      <div className="overlay">
                        <i className="fas fa-1x fa-sync-alt fa-spin" />
                        <div className="text-bold pt-2"> กำลังโหลดข้อมูล อาจใช้เวลาพอสมควร...</div>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
