import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import {
    DataGridPro,
    GridToolbar,
  } from "@mui/x-data-grid-pro";
import BatteryAlertOutlinedIcon from '@mui/icons-material/BatteryAlertOutlined';
import Battery6BarOutlinedIcon from '@mui/icons-material/Battery6BarOutlined';
import Grid from '@mui/material/Unstable_Grid2';
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";
import { useState, useEffect } from "react";
const RegistryManagement = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   const [data, setData] = useState([]);
   useEffect(() => {
    (async () => {
      const fetchData = await fetch(
         "https://6426461f556bad2a5b4cadb3.mockapi.io/registry"
      );
      const data = await fetchData.json();
      setData(data);
    })();
    }, []);

   const columns = [
    { field: "id", headerName: "Mã số kiểm định" },
    {
      field: "car_id",
      headerName: "Biển số xe",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "area",
      headerName: "Khu vực",
      headerAlign: "left",
      align: "left",
    },
    
    {
      field: "center",
      headerName: "Trung tâm đăng kiểm",
      flex: 1,
    },
    {
      field: "end_date",
      headerName: "Ngày hết hạn",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Trạng thái",
      flex: 1,
      renderCell: ({ row: { status } }) => {
        return (
          <Box
            width="70%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              status === "normal"
                ? colors.greenAccent[600]
                : colors.redAccent[600]
            }
            borderRadius="4px"
          >
            {status === "normal" && <Battery6BarOutlinedIcon />}
            {status === "nearly ended" && <BatteryAlertOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {status}
            </Typography>
          </Box>
        );
      },
    },
  ];
  
   return (
    <Box m="20px">
        <Header title="Quản lý đăng kiểm" subtitle="Quản lý danh sách xe đã đăng kiểm trên toàn quốc" />

        {/* Static */}
        <Grid container spacing={2} >
            <Grid xs={6} md={3}>
                <Box
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ height: 140}}>
                <StatBox
                    stat="12,362"
                    title="Tháng 3"
                    subtitle="Xe đăng kiểm mới"
                    progress="0.14"
                    increase="+14%"
                />
                </Box>
            </Grid>

            <Grid xs={6} md={3}>
                <Box
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ height: 140}}
                >
                <StatBox
                    stat="27,362"
                    title="Quý 1"
                    subtitle="Xe đăng kiểm mới"
                    progress="0.35"
                    increase="+35%"
                />
                </Box>
            </Grid>

            <Grid xs={6} md={3}>
                <Box
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ height: 140}}
                >
                <StatBox
                    stat="27,362"
                    title="Năm 2023"
                    subtitle="Xe đăng kiểm mới"
                    progress="0.35"
                    increase="+35%"
                />
                </Box>
            </Grid>

            <Grid xs={6} md={3}>
                <Box
                backgroundColor={colors.primary[400]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{ height: 140}}
                >
                <StatBox
                    stat="1,362"
                    title="Thống kê"
                    subtitle="Xe sắp hết hạn đăng kiểm"
                    progress="0.05"
                    increase="5%"
                />
                </Box>
            </Grid>  
        </Grid>

        {/* Table List */}

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

export default RegistryManagement;