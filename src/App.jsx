
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TaskProvider } from './context/TaskContext'

import Sidebar from './components/Sidebar'
import Header from './components/Header'
import StatsCards from './components/StatsCards'
import Schedule from './components/Schedule'
import Tasks from './components/Tasks'

import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import SchedulePage from './pages/SchedulePage'
import TasksPage from './pages/TasksPage'

function Dashboard({ theme }) {
  return (
    <>
      <StatsCards theme={theme} />

      <div className="mt-8">
        <Schedule />
      </div>

      <div className="mt-8">
        <Tasks />
      </div>
    </>
  )
}

function AppLayout() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('galaxy-theme') || 'dark'
    } catch {
      return 'dark'
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('galaxy-theme', theme)
    } catch {
      // Aplikasi tetap berfungsi jika penyimpanan tidak tersedia.
    }
  }, [theme])

  const isDark = theme === 'dark'

  const toggleTheme = () => {
    setTheme((current) =>
      current === 'dark' ? 'light' : 'dark'
    )
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDark
          ? 'bg-slate-950 text-white'
          : 'bg-slate-100 text-slate-900'
      }`}
    >
      <Sidebar theme={theme} />

      <main className="ml-64 min-h-screen p-8 max-lg:ml-20 max-sm:ml-0 max-sm:p-4">
        <Header
          theme={theme}
          onToggleTheme={toggleTheme}
        />

        <Routes>
          <Route path="/" element={<Dashboard theme={theme}/>} />
          <Route path="/courses" element={<Courses theme={theme}/>} />
          <Route
            path="/courses/:code"
            element={<CourseDetail theme={theme} />}
          />
          <Route path="/schedule" element={<SchedulePage theme={theme}/>} />
          <Route path="/tasks" element={<TasksPage theme={theme}/>} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <TaskProvider>
        <AppLayout />
      </TaskProvider>
    </BrowserRouter>
  )
}

export default App