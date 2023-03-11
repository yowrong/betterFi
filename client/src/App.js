import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingScreen from './features/landing/LandingScreen';
import EditJobScreen from './features/job/EditJobScreen';
import JobListScreen from './features/job-list/JobListScreen';
import JobScreen from './features/job/JobScreen';
import NotFoundScreen from './features/404/NotFoundScreen';
import './App.css';

const router = createBrowserRouter([
  { path: '/', element: <LandingScreen />},
  { path: '/new-job', element: <EditJobScreen /> },
  { path: '/jobs', element: <JobListScreen /> },
  { path: '/job/:id', element: <JobScreen /> },
  { path: '*', element: <NotFoundScreen /> },
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
