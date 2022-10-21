import React from "react";
import {IconButton,Badge} from "@mui/material/";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const badgeStyle={
    marginRight: "20px",
    width:"30px",
    height:"30px",
    borderStyle:"none",
    borderRadius:"5px",
    padding: "0 5px",
    color:"#7f8581",
    backgroundColor:"white",

}
function CartWidget(){

    return(
        <IconButton sx={badgeStyle}>
            <Badge anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
                }}
                badgeContent={3} 
                color="primary">
                <AddShoppingCartIcon />
            </Badge>
        </IconButton>
    );
}

export default CartWidget;