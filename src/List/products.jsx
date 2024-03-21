import React from "react";
import "../assets/css/hompage.css";

const ProductCard = ({ productData }) => {
    return (
        <div className="product-item">
            <div className="product-img">
                <img src={productData.img} alt="" />
            </div>
            <div className="p-2 product-info">
                <h3 className="product-name">{productData.name}</h3>
                <span>{productData.cate}</span>
            </div>
            <div className="product-card-bottom p-2">
                <span className="price">${productData.price}</span>
                <span><i className="fa-solid fa-plus"></i></span>
            </div>
        </div>
    );
}

export default ProductCard;
