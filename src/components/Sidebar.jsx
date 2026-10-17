
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  CheckSquare,
} from 'lucide-react'
import { NavLink } from 'react-router-dom'

function Sidebar({ theme = 'dark' }) {
  const isDark = theme === 'dark'

  const menuItems = [
    {
      to: '/',
      label: 'Dashboard',
      icon: LayoutDashboard,
    },
    {
      to: '/courses',
      label: 'Courses',
      icon: BookOpen,
    },
    {
      to: '/schedule',
      label: 'Schedule',
      icon: CalendarDays,
    },
    {
      to: '/tasks',
      label: 'Tasks',
      icon: CheckSquare,
    },
  ]

  return (
    <aside
      className={`fixed left-0 top-0 z-40 hidden h-screen w-64 border-r p-5 transition-colors duration-300 lg:block ${
        isDark
          ? 'border-white/10 bg-slate-950'
          : 'border-slate-200 bg-white'
      }`}
    >
      {/* Logo */}
      <div className="mb-8">
        <h1
          className={`text-2xl font-bold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Galaxy
        </h1>

        <p className="mt-1 text-xs text-slate-500">
          Student Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon

          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/20'
                    : isDark
                      ? 'text-slate-400 hover:bg-white/5 hover:text-white'
                      : 'text-slate-600 hover:bg-violet-50 hover:text-violet-700'
                }`
              }
            >
              <Icon size={19} />
              {item.label}
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar