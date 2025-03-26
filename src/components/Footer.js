import React from "react";

export const Footer = () => {
    return (
        <footer>
            <div id="faq_container">
                <div id="row_footer">
                    <div className="footer_card">
                        <h4>DC COMICS</h4>
                        <ul>
                            <li>Characters</li>
                            <li>Comics</li>
                            <li>Movies</li>
                            <li>TV</li>
                            <li>Games</li>
                            <li>Videos</li>
                            <li>News</li>
                        </ul>
                    </div>
                    <div className="footer_card">
                        <h4>DC</h4>
                        <ul>
                            <li>Terms Of Use</li>
                            <li>Privacy policy &#40;New&#41;</li>
                            <li>Ad Choices</li>
                            <li>Advertising</li>
                            <li>Jobs</li>
                            <li>Subscriptions</li>
                            <li>Talent Workshops</li>
                            <li>CPSC Certificates</li>
                            <li>Ratings</li>
                            <li>Shop Help</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="footer_card">
                        <h4>SITIES</h4>
                        <ul>
                            <li>DC</li>
                            <li>MAD Magazine</li>
                            <li>DC Kids</li>
                            <li>DC Universe</li>
                            <li>DC Power Visa</li>
                        </ul>
                    </div>
                    <div className="footer_card">
                        <h4>SHOP</h4>
                        <ul>
                            <li>Shop DC</li>
                            <li>Shop DC Collectibles</li>
                        </ul>
                    </div>
                </div>
                <div id="container_img">
                    <img id="dc_logo_footer" src="/img/dc-logo-bg.png"></img>
                </div>
            </div>
            <div id="social_container">
                <a href="#">
                    <div id="container_sing_up">
                        <p>SING&#45;UP NOW&#33;</p>
                    </div>
                </a>
                <div id="social">
                    <p>FOLLOW US</p>
                    <a href="#"><img src="/img/footer-facebook.png"></img></a>
                    <a href="#"><img src="/img/footer-twitter.png"></img></a>
                    <a href="#"><img src="/img/footer-youtube.png"></img></a>
                    <a href="#"><img src="/img/footer-pinterest.png"></img></a>
                    <a href="#"><img src="/img/footer-periscope.png"></img></a>
                </div>
            </div>
        </footer>
    );
};