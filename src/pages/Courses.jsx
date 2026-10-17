
import {
  BookOpen,
  CheckCircle2,
  Clock3,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { courses } from '../data/dashboardData'

function Courses({ theme }) {
  const isDark = theme === 'dark' ||
    document.documentElement.dataset.theme !== 'light'

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <p className="text-sm font-medium text-violet-500">
          Academic
        </p>

        <h1
          className={`mt-1 text-3xl font-bold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          My Courses
        </h1>

        <p
          className={`mt-2 ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          Track your learning progress and course assignments.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.code}
            className={`group overflow-hidden rounded-2xl border transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:shadow-xl hover:shadow-violet-500/10 ${
              isDark
                ? 'border-white/10 bg-white/5 hover:bg-white/10'
                : 'border-slate-200 bg-white shadow-sm hover:bg-violet-50/50'
            }`}
          >
            {/* Course Banner */}
            <div className={`h-2 bg-gradient-to-r ${course.color}`} />

            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className={`text-xs font-medium ${
                      isDark ? 'text-slate-500' : 'text-slate-500'
                    }`}
                  >
                    {course.code}
                  </p>

                  <h2
                    className={`mt-1 text-xl font-semibold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {course.name}
                  </h2>

                  <p
                    className={`mt-1 text-sm ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {course.lecturer}
                  </p>
                </div>

                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${course.color}`}
                >
                  <BookOpen size={21} className="text-white" />
                </div>
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className={`text-xs ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    Course Progress
                  </span>

                  <span
                    className={`text-xs font-semibold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {course.progress}%
                  </span>
                </div>

                <div
                  className={`h-2 overflow-hidden rounded-full ${
                    isDark ? 'bg-slate-800' : 'bg-slate-200'
                  }`}
                >
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div
                  className={`rounded-xl border p-3 ${
                    isDark
                      ? 'border-white/5 bg-slate-900/60'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    <CheckCircle2 size={16} />
                    <span className="text-xs">Completed</span>
                  </div>

                  <p
                    className={`mt-2 text-lg font-semibold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {course.completed}/{course.total}
                  </p>
                </div>

                <div
                  className={`rounded-xl border p-3 ${
                    isDark
                      ? 'border-white/5 bg-slate-900/60'
                      : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div
                    className={`flex items-center gap-2 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    <Clock3 size={16} />
                    <span className="text-xs">Assignments</span>
                  </div>

                  <p
                    className={`mt-2 text-lg font-semibold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {course.assignments}
                  </p>
                </div>
              </div>

              {/* Button */}
              <Link
                to={`/courses/${encodeURIComponent(course.code)}`}
                className={`mt-5 flex w-full items-center justify-center rounded-xl border py-3 text-sm font-medium transition ${
                  isDark
                    ? 'border-white/10 bg-white/5 text-slate-300 hover:bg-violet-600 hover:text-white'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-violet-600 hover:bg-violet-600 hover:text-white'
                }`}
              >
                View Course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses