import React from "react";
import Navbar from "../Navbar";
import CartWidget from "./CartWidget";
import BrandLogo from "./BrandLogo";

const linkStyle={
    margin: "0 10px",
    minWidth:"60px",
    height:"40px",
    borderStyle:"none",
    borderRadius:"5px",
    padding: "0 5px",
    color:"#7f8581",
    backgroundColor:"white",
    "&:hover":{backgroundColor: "#e67070",color:"white",borderStyle:"none"}
    };

const navLinks=[
        {titulo:"Home",
         url: "/Home"},
        {titulo:"Ofertas",
         url:"/Ofertas"},
        {titulo:"Empresa",
         url:"/Empresa"},
        {titulo:"Carro de Compras",
         url:"/Carro_de_Compras"},
        {titulo:"Contacto",
         url:"/Contacto"}
        ];
function Header(){

    return(
            <header className="header">
                <BrandLogo />
                <nav >
                {navLinks.map((value,index)=>(
                <Navbar 
                linkStyle = {linkStyle} 
                variant="button" 
                component="button" 
                title={value.titulo}
                href={value.url}
                key={index}
                />))}
                </nav>
                <CartWidget />
            </header>
            );
}

export default Header;
