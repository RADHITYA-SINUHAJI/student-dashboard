import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TaskProvider } from './context/TaskContext'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatsCards from './components/StatsCards'
import Schedule from './components/Schedule'
import Tasks from './components/Tasks'
import Courses from './pages/Courses'
import SchedulePage from './pages/SchedulePage'
import TasksPage from './pages/TasksPage'

function Dashboard() {
  return (
    <>
      <StatsCards />

      <div className="mt-8">
        <Schedule />
      </div>

      <div className="mt-8">
        <Tasks />
      </div>
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <div className="min-h-screen bg-slate-950 text-white">
          <Sidebar />

          <main className="ml-64 min-h-screen p-8 max-lg:ml-20">
            <Header />
            
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="/tasks" element={<TasksPage />} />
            </Routes>
          </main>
        </div>
      </TaskProvider>
    </BrowserRouter>
  )
}

export default App