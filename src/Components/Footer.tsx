import "../assets/css/Footer.css"
import Accordion from "./Accordion";

function Footer() {
    return ( 
        <>
            <footer className="main-footer">
                <div className="container">
                    <div className="flex">
                        <div className="block">
                            <Accordion heading="Featured Links">
                                <ul>
                                    <a href="https://www.lifeatcanva.com/en/canva-life/belong-at-canva/">Canva Communities</a>
                                    <a href="https://www.lifeatcanva.com/en/canva-life/our-culture-and-benefits/">Our Philosophy</a>
                                    <a href="https://www.lifeatcanva.com/en/search/">Search</a>
                                </ul>
                            </Accordion>
                        </div>
                        <div className="block">
                                <Accordion heading="Teams">
                                    <ul>
                                        <a href="https://www.lifeatcanva.com/en/teams/people/">People</a>
                                        <a href="https://www.lifeatcanva.com/en/teams/engineering/">Engineering</a>
                                        <a href="https://www.lifeatcanva.com/en/teams/marketing/">Marketing</a>
                                        <a href="https://www.lifeatcanva.com/en/teams/sales-and-success/">Sales and Success</a>
                                        <a href="https://www.lifeatcanva.com/en/teams/operations/">Operations</a>
                                        <a href="https://www.lifeatcanva.com/en/teams/finance/">Finance</a>
                                        <a href="https://www.lifeatcanva.com/en/teams/legal/">Legal</a>
                                        <a href="https://www.lifeatcanva.com/en/teams/design/">Design</a>
                                        <a href="https://www.lifeatcanva.com/en/teams/product-management/">Product Management</a>
                                        <a href="https://www.lifeatcanva.com/en/teams/customer-happiness/">Customer Happiness</a>
                                        <a href="https://www.lifeatcanva.com/en/teams/information-technology/">Information Technology</a>
                                    </ul>
                                </Accordion>
                            
                        </div>
                        <div className="block">
                            <Accordion heading="Locations">
                                <ul>
                                    <a href="https://www.lifeatcanva.com/en/locations/australia/">Canva Australia</a>
                                    <a href="https://www.lifeatcanva.com/en/locations/new-zealand/">New Zealand</a>
                                    <a href="https://www.lifeatcanva.com/en/locations/united-states/">United States</a>
                                    <a href="https://www.lifeatcanva.com/en/locations/united-kingdom/">United Kingdom</a>
                                    <a href="https://www.lifeatcanva.com/en/locations/china/">China</a>
                                    <a href="https://www.lifeatcanva.com/en/locations/austria/">Austria</a>
                                    <a href="https://www.lifeatcanva.com/en/locations/philippines/">Philippines</a>
                                    <a href="https://www.lifeatcanva.com/en/locations/czech-republic/">Czech Republic</a>
                                </ul>
                            </Accordion>
                        </div>
                        <div className="block">
                            <Accordion heading="Footer Links">
                                <ul>
                                    <a href="https://www.lifeatcanva.com/en/cookies/">Cookies</a>
                                    <a href="https://www.lifeatcanva.com/en/privacy-policy/">Privacy Policy</a>
                                    <a href="https://www.lifeatcanva.com/en/sitemap/">Sitemap</a>
                                </ul>
                            </Accordion>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="social">
                        <ul className="social-list">
                            <li><a target="_blank" href="https://twitter.com/canva"><img className="social-logo" src="https://upload.wikimedia.org/wikipedia/sco/thumb/9/9f/Twitter_bird_logo_2012.svg/1200px-Twitter_bird_logo_2012.svg.png" alt="" /></a></li>
                            <li><a target="_blank" href="https://www.facebook.com/canva"><img className="social-logo" src="https://www.svgrepo.com/show/98800/facebook-social-logo.svg" alt="" /></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/company/canva/"><img className="social-logo" src="https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png" alt="" /></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/canvalife/"><img className="social-logo" src="https://www.svgrepo.com/show/30539/instagram-logo.svg" alt="" /></a></li>
                        </ul>
                        <p className="footer-reserved">&#169; Canva 2023. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
     );
}

export default Footer;