import React from "react";
import { Link } from "@mui/material";


function Navbar({linkStyle,variant,component,href,title,icon}){

    return(
                    <Link sx={linkStyle} component={component} variant={variant} underline="none" href={href}>{icon} {title}</Link>

    );
}

export default Navbar;