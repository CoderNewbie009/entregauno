import React from "react";
import { Button, Card, CardActions, CardContent} from '@mui/material';
import {Divider,Typography,Link} from "@mui/material";
import {createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme({
    palette:{
        primary:{
            main: "#e67070",
            light: "#ffa19e",
            dark:"#b04045"
        }
    }
            });


const cardStyle={
width: "300px",
height: "500px",
display: "flex",
justifyContent: "flex-start",
alignItems: "center",
flexDirection: "column",
boxSizing: "border-box",
"&:hover":{boxShadow:"1px 1px 3px 2px #efefef, -1px -1px 2px 1px #efefef"}
}

function CardItem({productName, price, productDescription, productImage,productUrl}){
    
    return(
        <ThemeProvider theme={theme} >
            <Card sx={cardStyle} variant="outlined">
                <img 
                    src= {productImage}
                    style={{marginBottom:"15px", width:"150px",height:"150px"}}
                    alt="Imagen de producto de prueba"
                />

                <Divider 
                    variant="middle" 
                    sx={{width:"90%"}}
                />
                <CardContent sx={{textAlign:"center"}}>
                    <Link color="inherit" variant="h6" underline="hover" href={productUrl}>{productName}</Link>
                    <Typography variant="subtitle2"  sx={{margin:"10px 0", fontStyle:"italic"}}>DESDE</Typography>
                    <Typography variant="h5" sx={{fontStyle:"italic"}}>{price}</Typography>
                    <Typography variant="subtitle1" sx={{color:"#a69b97", fontStyle:"italic",margin:"10px 0"}}>{productDescription}</Typography>
                    <Typography variant="subtitle2" sx={{color:"#a69b97", fontStyle:"italic",marginBottom:"10px"}}>Tamaño a elección</Typography>
                    <Typography variant="subtitle1" sx={{color:"#76d275"}}>En Stock</Typography>
                </CardContent>
                <CardActions sx={{width:"100%",marginTop:"auto"}}>
                    <Button color="primary" variant="outlined" sx={{margin:"0 auto", width:"90%"}}>AGREGAR AL CARRO</Button>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
};

export default CardItem;