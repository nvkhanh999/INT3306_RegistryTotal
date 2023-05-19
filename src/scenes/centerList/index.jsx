import { Box, Typography, Button, useTheme } from "@mui/material";
import { Link } from 'react-router-dom';
import { tokens } from "../../theme";
import {
    DataGrid, GridToolbar
  } from "@mui/x-data-grid";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import Header from "../../components/Header";
import { useState, useEffect } from "react";


const CenterList = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [data, setData] = useState([]);

    useEffect(() => {
       (async () => {
         const fetchData = await fetch(
            "http://127.0.0.1:8000/center/all"
         );
         const data = await fetchData.json();
         console.log(data);
         setData(data);
       })();
    }, []);


    const columns = [
        { field: "centerID",
          headerName: "Mã trung tâm",
          renderCell: ({row : {centerID}}) => (
            <Link style={{ textDecoration: 'none', color: colors.grey[100] }}
            to={`/centerList/${centerID}`}>{centerID}</Link>
          ),
        },
		
        {
          field: "name",
          headerName: "Tên trung tâm",
          flex: 1,
          cellClassName: "name-column--cell",
        },
        {
          field: "address",
          headerName: "Địa chỉ",
          headerAlign: "left",
          align: "left",
        },
        {
          field: "phoneNumber",
          headerName: "Số điện thoại",
          flex: 1,
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },
        // {
        //   field: "accessLevel",
        //   headerName: "Vai trò",
        //   flex: 1,
        //   renderCell: ({ row: { accessLevel } }) => {
        //     return (
        //       <Button variant="contained"
        //         startIcon={accessLevel === "admin" ? <AdminPanelSettingsOutlinedIcon /> : <LockOpenOutlinedIcon /> }
        //         style ={{ backgroundColor: colors.greenAccent[600], borderRadius:"4px" }}>
        //         {accessLevel}
        //       </Button>
        //     );
        //   },
        // },
      ];



  return (
    <Box m="20px">
      <Header
        title="Danh sách trung tâm đăng kiểm"
        subtitle="Quản lý thông tin các trung tâm đăng kiểm"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        width="100%"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          slots={{ toolbar: GridToolbar }}
		  getRowId={row => row.centerID}
        />
      </Box>
    </Box>
  );
};

export default CenterList;
