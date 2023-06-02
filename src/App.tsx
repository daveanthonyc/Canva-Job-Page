import MainJobListingsView from "./View/MainJobListingsView"
import { FilterableSearcher } from "./Presenter/Presenter"
import { JobListingProvider } from "./Model/JobListingProvider"

const jobProvider = new JobListingProvider()
export const filterableSearcher = new FilterableSearcher(jobProvider)


function App() {

  return (
    <>
      <MainJobListingsView props={filterableSearcher} />
    </>
  )
}

export default App
