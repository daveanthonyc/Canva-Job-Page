import { JobListing } from "./JobListing"
import { jobData } from "./data";

export class JobListingProvider {
    private jobs: JobListing[]

    constructor() {
        this.jobs = []
        this.fetchJobs()
    }

    // can refactor to fetch job data from a server
    private fetchJobs(): void {
        this.jobs = jobData;
    }

    getJobs(): JobListing[] {
        return this.jobs;
    }
}

export interface JobListingProviderType {
    getJobs: () => JobListing[];
}