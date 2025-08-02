import { useState } from "react";
import { AllCommunityModule, ModuleRegistry } from "ag-grid-community";
import { AgGridReact } from "ag-grid-react"; // React Data Grid Component;
import data from "../utils/EmpData.json"; // Importing Employee Data
// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);
const EmployeeData = () => {
  const [employeeData] = useState(data.employees); // State to hold employee data
  const columnDefs = [
    { field: "id", headerName: "ID" },
    {
      valueGetter: (params) =>
        `${params.data.firstName} ${params.data.lastName}`,
      headerName: "Name",
    },
    { field: "age", headerName: "Age" },
    { field: "email", headerName: "Email" },
    { field: "department", headerName: "Department" },
    {field : "position", headerName: "Position"},
    { valueGetter: (params) => `${params.data.performanceRating} ⭐`, headerName: "Rating" },
    { field: "salary", headerName: "Salary" },
    { field: "hireDate", headerName: "Joining Date" },
  ];
  const defaultColDef = {
    flex: 1,
    filter: true, // Enable filtering for all columns
    sortable: true,
  };
  const gridOptions = {
    pagination: true, // Enable pagination
    paginationPageSize: 12, // Set page size
    rowSelection: "single", // Allow single row selection
    columnHoverHighlight: true,
  };
  return (
    <div
      className="ag-theme-alpine"
      style={{ height: "98vh", width: "80vw", margin: "0 auto" }}
    >
      <AgGridReact
        rowData={employeeData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        gridOptions={gridOptions}
        headerHeight={60}
        rowHeight={40}
        getRowClass={params => params.node.rowIndex % 2 === 0 ? 'ag-row-even' : 'ag-row-odd'}
      />
    </div>
  );
};

export default EmployeeData;
