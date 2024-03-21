import React, { useState } from "react";
import "../assets/css/hompage.css";
import heroImg from "../assets/images/web/hero-img.png"
import Services from "../List/service";
import ProductCard from "../List/products";
import Chair1 from "../assets/images/web/arm-chair-01.jpg";
import Chair2 from "../assets/images/web/arm-chair-02.jpg";
import Chair3 from "../assets/images/web/arm-chair-03.jpg";
import Chair4 from "../assets/images/web/arm-chair-01.jpg";
import Bigelow1 from "../assets/images/web/double-sofa-01.png";
import Bigelow2 from "../assets/images/web/double-sofa-02.png";
import Bigelow3 from "../assets/images/web/double-sofa-03.png";
import Bigelow4 from "../assets/images/web/double-sofa-01.png";
import Sofa1 from "../assets/images/web/single-sofa-01.jpg";
import Sofa2 from "../assets/images/web/single-sofa-02.jpg";
import Sofa3 from "../assets/images/web/single-sofa-03.jpg";
import Sofa4 from "../assets/images/web/single-sofa-04.png";

const Homepage = () => {
    const [trendProducts, setTrendProducts] = useState([
        {
            id: 1,
            name: 'Modern Armchair 1',
            cate: 'Chair',
            price: 2999,
            img: Chair1
        },
        {
            id: 2,
            name: 'Modern Armchair 2',
            cate: 'Chair',
            price: 3999,
            img: Chair2
        },
        {
            id: 3,
            name: 'Modern Armchair 3',
            cate: 'Chair',
            price: 4999,
            img: Chair3
        },
        {
            id: 4,
            name: 'Modern Armchair 4',
            cate: 'Chair',
            price: 5222,
            img: Chair4
        },
    ]);
    const [saleProducts, setSaleProducts] = useState([
        {
            id: 1,
            name: 'Double Sofa 1',
            cate: 'Sofa',
            price: 2999,
            img: Bigelow1
        },
        {
            id: 2,
            name: 'Double Sofa 2',
            cate: 'Sofa',
            price: 3999,
            img: Bigelow2
        },
        {
            id: 3,
            name: 'Double Sofa 3',
            cate: 'Sofa',
            price: 4999,
            img: Bigelow3
        },
        {
            id: 4,
            name: 'Double Sofa 4',
            cate: 'Sofa',
            price: 5222,
            img: Bigelow4
        },
        {
            id: 5,
            name: 'Single Sofa 1',
            cate: 'Sofa',
            price: 2999,
            img: Sofa1
        },
        {
            id: 6,
            name: 'Single Sofa 2',
            cate: 'Sofa',
            price: 3999,
            img: Sofa2
        },
        {
            id: 7,
            name: 'Single Sofa 3',
            cate: 'Sofa',
            price: 4999,
            img: Sofa3
        },
        {
            id: 8,
            name: 'Single Sofa 4',
            cate: 'Sofa',
            price: 5222,
            img: Sofa4
        },
    ]);
    return (
        <div>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="content">
                                <p className="subtitle">
                                    Trending product in 2024
                                </p>
                                <h2>Make Your Interior More Minimalistic & Model</h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut reprehenderit eum quisquam atque. Voluptatum error rerum, repudiandae dolorum, iusto animi accusantium sed qui nulla illo laborum molestias quam cupiditate dolorem?</p>
                                <button className="btn-buy">Shop Now</button>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="hero-img">
                                <img src={heroImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Services />
            <hr />
            <section className="products mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="sub-title">
                                Trending Products
                            </h2>
                        </div>
                        {
                            trendProducts.map((product) => {
                                return (
                                    <div className="col-md-3">
                                        <ProductCard key={product.id} productData={product}></ProductCard>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
            <hr />
            <section className="products mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h2 className="sub-title">
                                Best Sales
                            </h2>
                        </div>
                        {
                            saleProducts.map((product) => {
                                return (
                                    <div className="col-md-3">
                                        <ProductCard key={product.id} productData={product}></ProductCard>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </section>
        </div>

    );
};

export default Homepage;
