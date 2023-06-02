import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import SectionAcknowledge from "../Components/SectionAcknowledge/SectionAcknowledge";
import TypeWriterHero from "../Components/SectionTypeWriterHero/SectionTypeWriterHero";
import JobCard from "../Components/JobCard/JobCard";
import { Link } from "react-router-dom";
import { useState } from "react"
import "./SavedJobsView.css"
import { observer } from "mobx-react";
import { filterableSearcher as props } from "../App";

function SavedJobsView() {
    const [ savedJobs, setSavedJobs ] = useState<number>(props.getSavedJobs())

    return ( 
        <>
            <Navbar getSavedJobs={props.getSavedJobs}/>
            <TypeWriterHero>Your jobs</TypeWriterHero>
            <main>
                <div className="container">
                        <div className="justify-content-center">
                            <section className="section-results">
                                {
                                    savedJobs == 1 ?
                                        <p className="results"><span className="bold-results">{savedJobs}</span> Saved job</p>
                                        :
                                        <p className="results"><span className="bold-results">{savedJobs}</span> Saved jobs</p>
                                }
                            </section>
                            {
                                savedJobs === 0 ?
                                    <div className="text">
                                        <p>
                                        You don't currently have any saved jobs.
                                        <br/>
                                        But don't worry - you can save any job by clicking the heart symbol to add it to your list. 
                                        <br/>
                                        <Link to="/">
                                            <a href=""></a> Back to Job Search
                                        </Link>
                                        </p>
                                    </div>
                                : ""
                            }
                            
                            {
                                props.getSavedJobsArray().map((job, index) => {
                                    console.log(job.issaved)
                                    return <JobCard addSavedJob={props.pushIndexOfSavedJob} deleteSavedJob={props.deleteIndexOfSavedJob} index={index} key={job.url} job={job}/>
                                })
                            }

                            {
                                savedJobs === 0 ?
                                    ""
                                :
                                    <div className="center">
                                        <button className="search-button" type="button" onClick={() => {props.removeJobs(); setSavedJobs(0);}}>Remove All</button>
                                    </div>
                            }
                        </div>
                    </div>
            </main>
            <SectionAcknowledge />
            <Footer />
        </>
     );
}

export default observer(SavedJobsView);