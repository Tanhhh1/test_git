import React from "react";

export default function ProductCard({ product }) {
    return (
        <div className="col-3">
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.price}VND</p>
                <p className="card-text">{product.description}</p>
                <a href="#" className="btn btn-primary">By Now</a>
            </div>
        </div>
    );
}
