
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Clock3,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { courses } from '../data/dashboardData'

function CourseDetail({ theme }) {
  const { code } = useParams()
  const isDark = theme === 'dark'

  const course = courses.find(
    (item) => item.code === decodeURIComponent(code || '')
  )

  const headingClass = isDark ? 'text-white' : 'text-slate-900'
  const mutedClass = isDark ? 'text-slate-400' : 'text-slate-600'
  const cardClass = isDark
    ? 'border-white/10 bg-white/5'
    : 'border-slate-200 bg-white shadow-sm'
  const statCardClass = isDark
    ? 'border-white/10 bg-slate-900/60'
    : 'border-slate-200 bg-slate-50'

  if (!course) {
    return (
      <div className="py-12 text-center">
        <h1 className={`text-2xl font-bold ${headingClass}`}>
          Course Not Found
        </h1>

        <p className={`mt-2 ${mutedClass}`}>
          Course yang kamu cari tidak ditemukan.
        </p>

        <Link
          to="/courses"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-white transition hover:bg-violet-500"
        >
          <ArrowLeft size={18} />
          Back to My Courses
        </Link>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Back Button */}
      <Link
        to="/courses"
        className={`inline-flex items-center gap-2 text-sm transition hover:text-violet-500 ${
          isDark ? 'text-slate-400' : 'text-slate-600'
        }`}
      >
        <ArrowLeft size={18} />
        Back to My Courses
      </Link>

      {/* Course Information */}
      <div className={`overflow-hidden rounded-2xl border ${cardClass}`}>
        <div className={`h-2 bg-gradient-to-r ${course.color}`} />

        <div className="p-6 md:p-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p className="text-sm font-medium text-violet-500">
                {course.code}
              </p>

              <h1 className={`mt-2 text-3xl font-bold ${headingClass}`}>
                {course.name}
              </h1>

              <p className={`mt-3 ${mutedClass}`}>
                Lecturer: {course.lecturer}
              </p>
            </div>

            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${course.color}`}
            >
              <BookOpen size={28} className="text-white" />
            </div>
          </div>

          {/* Progress */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <span className={`text-sm ${mutedClass}`}>
                Course Progress
              </span>

              <span className={`font-semibold ${headingClass}`}>
                {course.progress}%
              </span>
            </div>

            <div
              className={`h-3 overflow-hidden rounded-full ${
                isDark ? 'bg-slate-800' : 'bg-slate-200'
              }`}
            >
              <div
                className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
                style={{
                  width: `${course.progress}%`,
                }}
              />
            </div>
          </div>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className={`rounded-xl border p-5 ${statCardClass}`}>
              <div className={`flex items-center gap-3 ${mutedClass}`}>
                <CheckCircle2 size={20} />
                <span>Completed Items</span>
              </div>

              <p className={`mt-3 text-2xl font-bold ${headingClass}`}>
                {course.completed}/{course.total}
              </p>
            </div>

            <div className={`rounded-xl border p-5 ${statCardClass}`}>
              <div className={`flex items-center gap-3 ${mutedClass}`}>
                <Clock3 size={20} />
                <span>Assignments</span>
              </div>

              <p className={`mt-3 text-2xl font-bold ${headingClass}`}>
                {course.assignments}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail