import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Navbar from "../Navbar";
import RedesSociales from "./RedesSociales";
import { Typography } from "@mui/material";


const linkStyle={
    fontFamily:"roboto",
    color:"white",
    
    "&:hover":{color:"#e67070"}
}
const navLinks=[
    {titulo:"Home",
     url: "/Home",
     icon: ""},
    {titulo:"Ofertas",
     url:"/Ofertas",
     icon: ""},
    {titulo:"Empresa",
     url:"/Empresa",
     icon: ""},
    {titulo:"Carro de Compras",
     url:"/Carro_de_Compras",
     icon: ""},
    {titulo:"Contacto",
     url:"/Contacto",
     icon: ""}
    ];

const socialLinks=[
    {titulo:"contacto@desafiouno.com",
     url: "mailto:contacto@desafiouno.com",
     icon: <MailIcon />},
    {titulo:"+56965613513",
     url:"/",
     icon: <SmartphoneIcon />},
    {titulo:"+56965613513",
     url:"https://web.whatsapp.com/",
     icon: <WhatsAppIcon />},
    {titulo:"/Desafiouno",
     url:"https://www.facebook.com/desafiouno",
     icon: <FacebookIcon />},
    {titulo:"desafiouno",
     url:"https://www.instagram.com/desafiouno",
     icon: <InstagramIcon />}
    ];

function Footer(){

    return(
        <footer className="footer">
            <div style={{display:"flex", justifyContent:"space-around", alignItems:"flex-start",width:"100%",marginTop:"30px"}}>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",margin:"15px 0 0 50px"}}>

                {navLinks.map((value,index)=>(
                        <Navbar
                        linkStyle = {linkStyle} 
                        variant="text" 
                        title={value.titulo} 
                        href={value.url}
                        key={index}
                        />))}
                
                </div>
                <div style={{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"}}>
                    
                    {socialLinks.map((value,index)=>(
                            <Navbar 
                            linkStyle = {linkStyle} 
                            variant="text" 
                            title={value.titulo} 
                            href={value.url}
                            icon={value.icon}
                            key={index}
                            />

                            ))}
                </div>
                <div style={{alignSelf:"center"}}>
                    <Typography gutterBottom color="white" align="center" variant="body1">Compartir en</Typography>
                    <RedesSociales />
                </div>
            </div>
             <Typography color="white" align="center" variant="body1" >Copyright © 2022 | CB3DESIGN | Creado por Giovi</Typography>       
        </footer>
    );
}

export default Footer;