import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { server } from "../../api";
import ExportCsvComponent from "../../components/ExportCSV/ExportCsvComponent";
import moment from "moment";

export default function ResultPage() {
  const mfgdate = moment().format("YYYY-MM-DD");
  const [results, setResult] = useState([]);
  const [date, setDate] = useState(mfgdate);

  useEffect(() => {
    getresult();
  }, []);

  const getresult = async () => {
    const res = await axios.get(server.API_GET_RESULT + "/" + mfgdate);
    setResult(res.data);
  };
  const handleSearch = async () => {
    if (!date) {
      console.log(mfgdate);
    } else {
      const res = await axios.get(server.API_GET_RESULT + "/" + date);
      setResult(res.data);
    }
  };

  

  const headers = [
    { label: "date", key: "date" },
    { label: "shift", key: "shift" },
    { label: "size", key: "size" },
    { label: "partNo", key: "partNo" },
    { label: "weight", key: "weight" },
    { label: "emp", key: "emp" },
    { label: "remark", key: "remark" },
    { label: "name", key: "name" },
    { label: "code", key: "code" },
    { label: "mc1", key: "mc1" },
    { label: "mc2", key: "mc2" },
  ];

  const data = [];
  results.forEach((item) => {
    data.push({
      date: item.Shiftto,
      shift: item.Shift,
      size: item.Size * 100,
      partNo: item.master_code + (item.Size *100),
      weight: item.Weight == 0 ? ((item.Weight * 1 + 0.005).toFixed(3)) : (item.Weight),
      emp: item.Emp,
      remark: item.remark == 'M' || item.remark == 'N' ? ("") : (item.remark),
      name: item.name_th,
      code: item.remark == 'M' || item.remark == 'N' ? ("") : (item.remark),
      mc1: "",
      mc2: item.Line,
    });
  });

  return (
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
          <h3 className="card-title">Result Scrap</h3>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-2 mb-2">
              <input
                type="date"
                className="form-control"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className="col-2 mb-2">
              <button className="btn btn-primary" onClick={handleSearch}>
                ค้นหา
              </button>
            </div>
          </div>
          <ExportCsvComponent
            csvData={data}
            headers={headers}
            fileName={mfgdate}
          />
          <table className="table table-bordered table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Control</th>
                <th>Name</th>
                <th>Reel</th>
                <th>Size</th>
                <th>Line</th>
                <th>Shift</th>
                <th>Emp</th>
                <th>Weight</th>
                <th>Remark</th>
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
                    <td className="text-center">{result.Size}</td>
                    <td className="text-center">{result.Line}</td>
                    <td className="text-center">{result.Shift}</td>
                    <td className="text-center">{result.Emp}</td>
                    <td className="text-center">
                      {(result.Weight * 1 + 0.005).toFixed(3)}
                    </td>
                    <td className="text-center">
                      {result.remark == "M" || result.remark == "N"
                        ? "-"
                        : result.remark}
                    </td>
                    <td className="text-center">{result.Shiftto}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={11} className="text-center">
                    <div className="overlay">
                      <i className="fas fa-1x fa-sync-alt fa-spin" />
                      <div className="text-bold pt-2"> ไม่มีข้อมูล...</div>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
