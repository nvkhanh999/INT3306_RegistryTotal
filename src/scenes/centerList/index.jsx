import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import {
    DataGridPro,
    GridToolbar,
  } from "@mui/x-data-grid-pro";
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
            "https://6426461f556bad2a5b4cadb3.mockapi.io/centers"
         );
         const data = await fetchData.json();
         setData(data);
       })();
    }, []);
  

    const columns = [
        { field: "id", headerName: "Mã trung tâm" },
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
          field: "phone",
          headerName: "Phone Number",
          flex: 1,
        },
        {
          field: "email",
          headerName: "Email",
          flex: 1,
        },
        {
          field: "accessLevel",
          headerName: "Vai trò",
          flex: 1,
          renderCell: ({ row: { accessLevel } }) => {
            return (
              <Box
                width="60%"
                m="0 auto"
                p="5px"
                display="flex"
                justifyContent="center"
                backgroundColor={
                  accessLevel === "admin"
                    ? colors.greenAccent[600]
                    : colors.greenAccent[700]
                }
                borderRadius="4px"
              >
                {accessLevel === "admin" && <AdminPanelSettingsOutlinedIcon />}
                {accessLevel === "user" && <LockOpenOutlinedIcon />}
                <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                  {accessLevel}
                </Typography>
              </Box>
            );
          },
        },
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
        <DataGridPro
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default CenterList;
