import { JobListing } from "../Model/JobListing"
import { JobListingProvider } from "../Model/JobListingProvider";
import { makeAutoObservable } from "mobx"

export class FilterableSearcher {
    private originalData: JobListing[]
    accessibleJobData: JobListing[]

    searchBarValue = ""

    //drop down filter criteria publicly accessible in View
    searchCriteriaTeam = ""
    searchCriteriaSpecialty = ""
    searchCriteriaLocation = ""
    searchCriteriaContract = ""

    savedJobs:JobListing[] = []

    constructor(jobProvider: JobListingProvider) {
        this.originalData = jobProvider.getJobs()
        this.accessibleJobData = [...this.originalData]
        makeAutoObservable(this)
    }

    getSavedJobsArray(): JobListing[] {
        return this.accessibleJobData.filter((job) => {
            if (job.issaved === true) {
                return job
            }
        })
    }

    removeJobs(): void {
        this.savedJobs = [];
        this.accessibleJobData.forEach((job) => {
            job.issaved = false;
        })
        this.originalData.forEach((job) => {
            job.issaved = false;
        })
    }

    search(): void {
        this.accessibleJobData = this.originalData

            //search by filter
            this.accessibleJobData = this.accessibleJobData.filter((job) => {
                if (job.team.includes(this.searchCriteriaTeam) && job.specialty.includes(this.searchCriteriaSpecialty) && job.location.includes(this.searchCriteriaLocation) && job.contract.includes(this.searchCriteriaContract)) {
                        
                    // //search by key word if there is a value in search bar
                    if (this.searchBarValue != "") {
                        this.searchBarValue = this.searchBarValue.toLowerCase()
                        
                        let contract = job.contract.toLowerCase()
                        let jobtitle = job.jobtitle.toLowerCase()
                        let location = job.location.toLowerCase()
                        let specialty = job.specialty.toLowerCase()
                        let team = job.team.toLowerCase()
                        
                        const words = this.searchBarValue.split(" ")
                        //filter by EACH key word in search
                        for (let i = 0; i < words.length; i++) {
                            let word = words[i]
                            if (contract.includes(word) || jobtitle.includes(word) || location.includes(word) || specialty.includes(word) || team.includes(word)) {
                                return job
                            }
                        }
                    } else {
                        return job
                    }
                }
            })
    }

    getNumberOfResults(): number {
        return this.accessibleJobData.length
    }

    updateCategory(category: string, input: string): void {

       switch (category) {
        case 'Team':
            this.searchCriteriaTeam = input
            break;
        case 'Specialty':
            this.searchCriteriaSpecialty = input
            break;
        case 'Location':
            this.searchCriteriaLocation = input
            break;
        case 'Contract Type':
            this.searchCriteriaContract = input
            break;
       
        default:
            break;
       }
    }


    pushIndexOfSavedJob(index: number): void {
        this.savedJobs.push(this.originalData[index]);
        this.originalData[index].issaved = true;
        this.accessibleJobData[index].issaved = true
    }
    
    deleteIndexOfSavedJob(index: number): void {
        this.originalData[index].issaved = false;
        this.accessibleJobData[index].issaved = false;
        this.savedJobs = this.savedJobs.filter((job) => {
            if (JSON.stringify(job) != JSON.stringify(this.accessibleJobData[index])) {
                return job
            }
        })
    }

    getSavedJobs(): number {
        return this.savedJobs.length
    }
}

//Type of the prop passed to this component
export type Presenter = {
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