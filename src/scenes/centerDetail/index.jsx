import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {Box, Typography, useTheme, Button} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import { tokens } from "../../theme";
import {
    DataGrid,
    GridToolbar,
  } from "@mui/x-data-grid";
import Header from "../../components/Header";
import StatBox from "../../components/StatBox";

const CenterDetail = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [centers, setCenter] = useState([]);
    const [registries, setRegistry] = useState([]);
    //fecth api de lay data centers
    useEffect(() => {
       (async () => {
         const fetchData = await fetch(
            "https://6426461f556bad2a5b4cadb3.mockapi.io/centers"
         );
         const centers = await fetchData.json();
         setCenter(centers);
       })();
    }, []);

    //tim kiem theo id
    const { centerId } = useParams();
    const center = centers.find((center) => center.id === centerId);
    const { name, address, phone, email, accessLevel } = center || {};

    useEffect(() => {
        (async () => {
          const fetchData = await fetch(
             "https://6426461f556bad2a5b4cadb3.mockapi.io/registry"
          );
          const registries = await fetchData.json();
          setRegistry(registries);
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
              
              <Typography color={status === "normal" ? colors.greenAccent[400]: '#fff207'}>{status}</Typography>
            );
          },
        },
      ];
      
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title={name} subtitle="Quản lý danh sách xe đã đăng kiểm tại trung tâm" />
                <Box>
                    <Link to="/centerList">
                        <Button
                        sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "14px",
                        fontWeight: "bold",
                        padding: "10px 20px"
                        }}
                        >
                            Quay về trang trước
                        </Button>
                    </Link>
                </Box>
            </Box>
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
            <DataGrid
            rows={registries}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            />
        </Box>

    </Box>
    );
};
export default CenterDetail;