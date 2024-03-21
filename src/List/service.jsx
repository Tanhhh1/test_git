import React from "react";
import "../assets/css/service.css";
const Services = () => {
    return (
        <section className="service">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="service-item ship">
                            <span><i class="fa-solid fa-truck-fast"></i></span>
                            <div>
                                <h3>Free Ship</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem doloremque iusto, nesciunt eveniet consequatur ad suscipit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-item return">
                            <span><i class="fa-solid fa-rotate-left"></i></span>
                            <div>
                                <h3>Easy Returns</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem doloremque iusto, nesciunt eveniet consequatur ad suscipit</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="service-item payment">
                            <span><i class="fa-solid fa-money-check"></i></span>
                            <div>
                                <h3>Payment</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rem doloremque iusto, nesciunt eveniet consequatur ad suscipit</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;