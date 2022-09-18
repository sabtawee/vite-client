import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "sweetalert2/src/sweetalert2.scss";
//css
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "admin-lte/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css";
import "admin-lte/plugins/icheck-bootstrap/icheck-bootstrap.min.css";
import "admin-lte/plugins/jqvmap/jqvmap.min.css";
import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/plugins/overlayScrollbars/css/OverlayScrollbars.min.css";
import "admin-lte/plugins/daterangepicker/daterangepicker.css";
import "admin-lte/plugins/summernote/summernote-bs4.min.css";
//datatable css
import "admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css";
import "admin-lte/plugins/datatables-responsive/css/responsive.bootstrap4.min.css";
import "admin-lte/plugins/datatables-buttons/css/buttons.bootstrap4.min.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);