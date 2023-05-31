import "../assets/css/Navbar.css"
import { filterableSearcher } from "../Presenter/Presenter";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";
import { useState } from 'react'

function Navbar() {
    const [ mobileNavActive, setMobileNavActive] = useState<boolean>(false);

    return ( 
        <>
        <header className='header'>
            <div className='container-fluid'>
                <div className='flex-space-between'>
                    <div className='flex-space-between'>
                        <a href="https://www.lifeatcanva.com/en/">
                            <img src="https://www.lifeatcanva.com/images/logo.svg" alt="Logo" width={112} height={35} className="logo"/>
                        </a>
                        <nav>
                            <ul className='navbar-nav'>
                                <li>
                                    <Link to="/">
                                        <a href="https://www.lifeatcanva.com/en/jobs/">Jobs</a>
                                    </Link>
                                </li>
                                <li><a className="drop-down" href="https://www.lifeatcanva.com/en/canva-life/">Canva life</a></li>
                                <li><a className="drop-down" href="https://www.lifeatcanva.com/en/locations/">Teams</a></li>
                                <li><a className="drop-down" href="https://www.lifeatcanva.com/en/teams/">Locations</a></li>
                                <li><a className="drop-down" href="https://www.lifeatcanva.com/en/career-pathways/">Career pathways</a></li>
                                <li><a href="https://www.lifeatcanva.com/en/how-we-hire/">How we hire</a></li>
                            </ul>
                        </nav>
                    </div>


                    <div className="flex-space-between gap">
                        <Link to="/saved-jobs">
                            <a href="" className="saved-job-a">
                                <img title="Save" className="saved-job-link" src="https://pic.onlinewebfonts.com/svg/img_356370.png" alt="heart" />
                                <div className="saved-job-counter">
                                    {filterableSearcher.getSavedJobs()}
                                </div>
                            </a>
                        </Link>
                        <button className="nav-toggle" onClick={() => setMobileNavActive(true)}></button>
                        <a className="button" href="https://flows.beamery.eu/canva/canvalife-talent-community" target='_blank'>Join talent community</a>
                    </div>
                </div>
            </div>
        </header>
        
        <div className="mobile-nav" data-state={mobileNavActive}>
            <button className="nav-toggle-close" onClick={() => setMobileNavActive(false)}></button>
            <ul className='navbar-nav-mobile'>
                <li>
                    <Link to="/">
                        <a className="inside-link" href="https://www.lifeatcanva.com/en/jobs/">Jobs</a>
                    </Link>
                </li>
                <li><a className="drop-down inside-link" href="https://www.lifeatcanva.com/en/canva-life/">Canva life</a></li>
                <li><a className="drop-down inside-link" href="https://www.lifeatcanva.com/en/locations/">Teams</a></li>
                <li><a className="drop-down inside-link" href="https://www.lifeatcanva.com/en/teams/">Locations</a></li>
                <li><a className="drop-down inside-link" href="https://www.lifeatcanva.com/en/career-pathways/">Career pathways</a></li>
                <li><a className="inside-link" href="https://www.lifeatcanva.com/en/how-we-hire/">How we hire</a></li>
            </ul>

            <a className="button-nav" href="https://flows.beamery.eu/canva/canvalife-talent-community" target='_blank'>Join talent community</a>
        </div>
        </>
     );
}

export default observer(Navbar);