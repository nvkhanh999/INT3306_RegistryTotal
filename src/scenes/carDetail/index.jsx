import Header from "../../components/Header";
import {Box, Button, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
const CarDetail = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="Thống tin đăng kiểm" subtitle="Thông tin chi tiết của ô tô đã đăng kiểm" />
            {/* Card Info */}

            <Card sx={{ display: 'flex' }}>
                <CardMedia sx={{ flex: '1 0 auto' }}
                    component="img"
                    image="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?b=1&s=170667a&w=0&k=20&c=m2g-wU5m2tbqC7C_nWAgu7txHzeEnXKSFuby01V4dtI="
                />
                <CardContent>
                <Typography component="div" variant="h5">
                    Live From Space
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Mac Miller
                </Typography>
                </CardContent>
            
            </Card>
        </Box>
    );
};

export default CarDetail;