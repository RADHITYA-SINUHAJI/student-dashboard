
import {
  BookOpen,
  ClipboardList,
  Target,
  Star,
} from 'lucide-react'
import { courses, tasks } from '../data/dashboardData'

function StatsCards({ theme }) {
  const isDark = theme === 'dark'

  const activeCourses = courses.length
  const pendingAssignments = tasks.filter(
    (task) => !task.completed,
  ).length

  const stats = [
    {
      title: 'Active Courses',
      value: activeCourses,
      label: 'Courses',
      icon: BookOpen,
      color: 'from-violet-500 to-purple-600',
    },
    {
      title: 'Pending Assignments',
      value: pendingAssignments,
      label: 'Assignments',
      icon: ClipboardList,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Attendance',
      value: '92%',
      label: 'This Semester',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      title: 'Current GPA',
      value: '3.85',
      label: 'Excellent',
      icon: Star,
      color: 'from-amber-500 to-orange-500',
    },
  ]

  return (
    <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon

        return (
          <div
            key={stat.title}
            className={`group relative overflow-hidden rounded-2xl border p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/10 ${
              isDark
                ? 'border-white/10 bg-white/5 hover:bg-white/10'
                : 'border-slate-200 bg-white shadow-sm hover:bg-violet-50/50'
            }`}
          >
            {/* Decorative Glow */}
            <div
              className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full blur-2xl transition duration-500 group-hover:bg-violet-500/20 ${
                isDark ? 'bg-violet-500/10' : 'bg-violet-400/10'
              }`}
            />

            <div className="relative flex items-start justify-between gap-3">
              <div>
                <p
                  className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-slate-500'
                  }`}
                >
                  {stat.title}
                </p>

                <h3
                  className={`mt-2 text-3xl font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {stat.value}
                </h3>

                <p
                  className={`mt-1 text-xs ${
                    isDark ? 'text-slate-500' : 'text-slate-500'
                  }`}
                >
                  {stat.label}
                </p>
              </div>

              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-lg transition duration-300 group-hover:scale-110 group-hover:shadow-xl`}
              >
                <Icon size={22} className="text-white" />
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default StatsCards