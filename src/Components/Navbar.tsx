import "../assets/css/Navbar.css"
import { filterableSearcher } from "../Presenter/Presenter";
import { observer } from "mobx-react";
import { Link } from "react-router-dom";

function Navbar() {
    return ( 
        <>
        <header className='header'>
            <div className='container-fluid'>
                <div className='flex-space-between'>
                    <div className='flex-space-between'>
                        <div>
                            <a href="https://www.lifeatcanva.com/en/">
                                <img src="https://www.lifeatcanva.com/images/logo.svg" alt="Logo" width={112} height={35} className="logo"/>
                            </a>
                        </div>
                    <div>
                        <nav>
                            <div>
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
                            </div>
                        </nav>
                    </div>
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
                        <a className="button" href="https://flows.beamery.eu/canva/canvalife-talent-community" target='_blank'>Join talent community</a>
                    </div>
                </div>
            </div>
        </header>
        </>
     );
}

export default observer(Navbar);