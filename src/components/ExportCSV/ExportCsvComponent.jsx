import React from "react";
import { CSVLink } from "react-csv";
import { Button } from "react-bootstrap";

export default function ExportCsvComponent({ csvData, fileName, headers }) {
  return (
    <CSVLink data={csvData} headers={headers} filename={`${fileName}`}>
      <Button variant="success" className="mb-2">
        ดาวห์โหลด CSV ไฟล์
      </Button>
    </CSVLink>
  );
}
