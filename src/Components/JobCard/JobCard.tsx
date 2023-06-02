import { JobListing } from "../../Model/JobListing";
import "./JobCard.css"
import { useState } from 'react'

function JobCard({ job, index, addSavedJob, deleteSavedJob }: { job: JobListing, index: number, addSavedJob: (index: number) => void, deleteSavedJob: (index: number) => void}) {
    const [saved, setSaved] = useState<boolean>(job.issaved);

    return ( 
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
            <button className="save-button" onClick={() => { setSaved(!saved); !saved ? addSavedJob(index) : deleteSavedJob(index)}}>
                <img title="Save" className={saved ? "saved-job-heart-selected" : "saved-job-heart"} src="https://pic.onlinewebfonts.com/svg/img_356370.png" alt="heart" />
            </button>
        </div>
     );
}

export default JobCard;