import "../assets/css/MainJobListingsView.css"
import { JobListing } from "../Model/data";
import JobCard from "../Components/JobCard";
import DropDownFilter from "../Components/DropDownFilter"; 
import Footer from "../Components/Footer";
import SectionAcknowledge from "../Components/SectionAcknowledge";
import TypeWriterHero from "../Components/SectionTypeWriterHero";
import Navbar from "../Components/Navbar";
import { observer } from "mobx-react";

//Type of the prop passed to this component
type Presenter = {
    accessibleJobData: JobListing[]

    searchBarValue: string

    searchCriteriaTeam: string
    searchCriteriaSpecialty: string
    searchCriteriaLocation: string
    searchCriteriaContract: string

    savedJobs: JobListing[]

    getSavedJobsArray: () => JobListing[]
    removeJobs: () => void
    search: () => void
    getNumberOfResults: () => number
    updateCategory: (category: string, input: string) => void
    pushIndexOfSavedJob: (index: number) => void
    deleteIndexOfSavedJob: (index: number) => void
    getSavedJobs: () => number
}



function MainJobListingsView({ props }: { props: Presenter}) {

    function editTextInputFieldValue(): void {
        const textField = document.getElementById('search')!
        textField.nodeValue = ""
    }

    return ( 
        <>
            <Navbar />
            <TypeWriterHero highlightBoxText="dream job">Find your </TypeWriterHero>

            <main>

                <div className="search-form-wrapper">
                    <div className="container">
                        <div className="search-form">
                            <form className="js-job-search-form" action="/" method="GET" onSubmit={(e) => { props.search(); e.preventDefault(); editTextInputFieldValue()}}>
                                <fieldset className="search-container">
                                    <div className="form-group">
                                        <input type="text" placeholder="Search" id="search" className="form-control" autoComplete="off" onChange={(e) => {props.searchBarValue = e.target.value}} />
                                    </div>
                                    <div className="form-flex">
                                        <div className="form-group">
                                            <DropDownFilter category="Team" placeHolder="Team" dropDownOptions={["Design", "Engineering", "Freelance & Contract", "Internship"]}></DropDownFilter>
                                        </div>
                                        <div className="form-group">
                                            <DropDownFilter category="Specialty" placeHolder="Specialty" dropDownOptions={["Frontend", "Backend", "Fullstack", "Tech Support", "Data Analytics", "Product Design", "Research"]}></DropDownFilter>
                                        </div>
                                        <div className="form-group">
                                            <DropDownFilter category="Location" placeHolder="Location" dropDownOptions={["Sydney", "Manila", "Auckland", "Vienna"]}></DropDownFilter>
                                        </div>
                                        <div className="form-group">
                                            <DropDownFilter category="Contract Type" placeHolder="Contract Type" dropDownOptions={["Contract & Freelance", "Full-time", "Internship"]}></DropDownFilter>
                                        </div>
                                        <button className="search-button" type="button" onClick={() => {props.search();}}>Search</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>


                <div className="container">
                    <div className="justify-content-center">
                        <section className="section-results">
                            {
                                <p className="results"><span className="bold-results">{props.getNumberOfResults()}</span> Live Results</p>
                            }
                        </section>
                        {props.accessibleJobData.map((job, index) => {
                            return <JobCard index={index} key={job.url} job={job}/>
                        })}
                    </div>
                </div>

            </main>

            <SectionAcknowledge />
            <Footer />
        </>
     );
}

export default observer(MainJobListingsView);