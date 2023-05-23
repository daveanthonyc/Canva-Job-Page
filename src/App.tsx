import MainJobListingsView from "./View/MainJobListingsView"
import { filterableSearcher } from "./Presenter/Presenter"

function App() {
  return (
    <>
      <MainJobListingsView props={filterableSearcher}/>
    </>
  )
}

export default App
