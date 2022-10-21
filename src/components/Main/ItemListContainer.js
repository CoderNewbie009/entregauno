import React from "react";
import CardItem from "./CardItem";

const cardData = {
    name: "Prueba",
    price: "400",
    description: "Este es un producto de prueba",
    image: process.env.PUBLIC_URL + "/imagenes/logo512.png",
    url:""
};

function ItemListContainer(){

    return (
        <CardItem
            productName={cardData.name} 
            price={cardData.price} 
            productDescription={cardData.description}
            productImage={cardData.image}
            productUrl={cardData.url} 
        />      
    );
}

export default ItemListContainer;