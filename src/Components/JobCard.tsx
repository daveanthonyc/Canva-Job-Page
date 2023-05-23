import { JobListing } from "../Model/data";
import "../assets/css/JobCard.css"
import { useState } from 'react'
import { filterableSearcher } from "../Presenter/Presenter";

function JobCard({ job, index }: { job: JobListing, index: number}) {
    const [saved, setSaved] = useState<boolean>(job.issaved);

    return ( 
        <>
        <div className="relative">
            <a className="job-link" href={job.url}>
                <div className="job-card">
                    <div className="card-body">
                        <div className="text-area">
                            <h2 className="job-card-heading">{job.jobtitle}</h2>
                            <ul>
                                <li>{job.team}</li>
                                <li>{job.location}</li>
                            </ul>
                        </div>
                        <div className="flex-end">
                        </div>
                    </div>
                    
                </div>
            </a>
            <button className="save-button" onClick={(e) => { setSaved(!saved); !saved ? filterableSearcher.pushIndexOfSavedJob(index) : filterableSearcher.deleteIndexOfSavedJob(index)}}>
                <img title="Save" className={filterableSearcher.accessibleJobData[index].issaved ? "saved-job-heart-selected" : "saved-job-heart"} src="https://pic.onlinewebfonts.com/svg/img_356370.png" alt="heart" />
            </button>
            {/* <button className="save-button" onClick={(e) => { setSaved(!saved); !saved ? filterableSearcher.pushIndexOfSavedJob(index) : filterableSearcher.deleteIndexOfSavedJob(index)}}>
                <img title="Save" className={filterableSearcher.accessibleJobData[index].issaved ? "saved-job-heart-selected" : "saved-job-heart"} src="https://pic.onlinewebfonts.com/svg/img_356370.png" alt="heart" />
            </button> */}
        </div>
        </>
     );
}

export default JobCard;