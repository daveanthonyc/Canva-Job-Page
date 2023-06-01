import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./View/MainJobListingsView.css"
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import SavedJobsView from './View/SavedJobsView.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/saved-jobs",
    element: <SavedJobsView />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} />
)
