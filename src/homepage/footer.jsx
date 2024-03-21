import React from "react";

import "../assets/css/footer.css"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="logo">
                            <div>
                                <h1>Multimart</h1>
                            </div>
                        </div>
                        <p className="footer-text mt-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, quibusdam vero! Ullam quas, earum obcaecati nihil nesciunt, voluptate neque quis qui a ipsum tenetur doloremque iusto mollitia totam. Ad, placeat!
                        </p>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-quick-links">
                            <h4 className="footer-links-title">Top Categories</h4>
                            <div className="mt-4">
                                <span>Mobile Phones</span>
                                <span>Modern Sofa</span>
                                <span>Arm Chair</span>
                                <span>Single Sofe</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="footer-quick-links">
                            <h4 className="footer-links-title">Useful Links</h4>
                            <div className="mt-4">
                                <span>Shop</span>
                                <span>Cart</span>
                                <span>Wishlist</span>
                                <span>Login</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-quick-links">
                            <h4 className="footer-links-title">Contact</h4>
                            <div className="mt-4">
                                <span>
                                    <p><i class="fa-solid fa-location-dot"></i>123 ZindaBazar, Sylhet, Bangladesh</p>
                                </span>
                                <span>
                                    <p><i class="fa-solid fa-location-dot"></i>456 ZindaBazar, Sylhet, Bangladesh</p>
                                </span>
                                <span>
                                    <p><i class="fa-solid fa-envelope"></i>avsacas@gmail.com</p>
                                </span>
                                <span>
                                    <p><i class="fa-solid fa-phone"></i>+8402315631068</p>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer >
    );
};

export default Footer;
