import React from "react";
import {Avatar} from "@mui/material";

const urlLogo=process.env.PUBLIC_URL + "/imagenes/mari.svg";


function BrandLogo(){

    return(
        <Avatar sx={{marginLeft:"20px",  width: "80px", height:"80px"}} src={urlLogo} alt="Desafio Uno"  ></Avatar>
        );
}

export default BrandLogo;