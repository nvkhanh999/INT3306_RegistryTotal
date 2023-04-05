import { Typography, Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import Grid from '@mui/material/Unstable_Grid2';
import StatBox from "../../components/StatBox";
import { tokens } from "../../theme";
const Line = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Dự báo số liệu" subtitle="Dự báo số lượng xe đăng kiểm trong tháng tới " />
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
                    stat="60,000"
                    title="Toàn quốc"
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
                    stat="20,000"
                    title="Miền Bắc"
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
                    stat="20,000"
                    title="Miền Trung"
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
                    stat="20,000"
                    title="Miền Nam"
                    subtitle="Xe đăng kiểm mới"
                    progress="0.35"
                    increase="+35%"
                />
                </Box>
            </Grid>  
        </Grid>

      <Box height="75vh" paddingTop={5}>
        <Typography variant="h4" color={colors.greenAccent[400]}>
            Lượng xe đăng kiểm ở các khu vực trong 10 tháng gần đây và dự báo tháng tới
        </Typography>
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;