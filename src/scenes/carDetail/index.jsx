import Header from "../../components/Header";
import {Box, Button, Typography, useTheme, Card, CardContent, CardMedia  } from "@mui/material";
import Battery90OutlinedIcon from '@mui/icons-material/Battery90Outlined';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import { tokens } from "../../theme";
const CarDetail = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <Box m="20px">
            <Header title="Thông tin đăng kiểm" subtitle="Thông tin chi tiết của ô tô đã đăng kiểm" />
            {/* Card Info */}

            <Card sx={{ display: 'flex', flexDirection:'row', borderRadius: '15px', height:'54vh'}} >
            <CardMedia
                component="img"
                alt="car"
                image="https://media.istockphoto.com/id/1307086567/photo/generic-modern-suv-car-in-concrete-garage.jpg?b=1&s=170667a&w=0&k=20&c=m2g-wU5m2tbqC7C_nWAgu7txHzeEnXKSFuby01V4dtI="
                sx={{ flex: '2'}}
            />
            <CardContent sx={{ flex: '1', backgroundColor: colors.primary[400] }}>
                <Typography gutterBottom variant="h3" component="div"  color={colors.grey[100]}
                    fontWeight="bold"
                    sx={{ m: "0 0 10px 0" }}>
                Mercedes-Benz s450
                </Typography>
                <Typography variant="h5" color={colors.grey[100]} sx={{ p: '5px 0 8px 0'}}>
                    Biển số xe: 30A-12345
                </Typography>
                <Typography variant="h5" color={colors.grey[100]} sx={{ p: '5px 0 8px 0'}}>
                    Mã đăng kiểm: 163HJG
                </Typography>
                <Typography variant="h5" color={colors.grey[100]} sx={{ p: '5px 0 8px 0'}}>
                    Mục đích sử dụng: Xe con - xe cá nhân
                </Typography>
                <div className="color" style={{ display: 'flex' , paddingBottom: '10px'}}>
                    <Typography variant="h5" color={colors.grey[100]} sx={{ p: '5px 0 8px 0'}}>
                        Màu sắc : 
                    </Typography>
                    <div style={{ display:'inline-block', borderRadius: '50%', backgroundColor: 'white', width: '30px', height:'30px', marginLeft: '5px'}}></div>
                </div>
                <div className="color" style={{ display: 'flex'}}>
                    <Typography variant="h5" color={colors.grey[100]} sx={{ p: '5px 0 8px 0'}}>
                        Trạng thái :
                    </Typography>
                    <Button variant="contained" startIcon={<Battery90OutlinedIcon />} 
                    style={{ color: 'white', backgroundColor: '#3DA58A', marginLeft: '5px', borderRadius:'10px' }}
                    >
                        Còn hạn
                    </Button>
                </div>
                <Box pt="12px">
                    <Button
                        sx={{
                        backgroundColor: colors.blueAccent[700],
                        color: colors.grey[100],
                        fontSize: "12px",
                        fontWeight: "bold",
                        padding: "10px 20px",
                        }}
                    >
                        <PrintOutlinedIcon sx={{ mr: "10px" }} />
                        In giấy chứng nhận đăng kiểm
                    </Button>
                </Box>
        
                
            </CardContent>
            </Card>

            
        </Box>
    );
};

export default CarDetail;