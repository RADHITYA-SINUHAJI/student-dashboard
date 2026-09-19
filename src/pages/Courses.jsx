import { BookOpen, CheckCircle2, Clock3 } from 'lucide-react'
import { courses } from '../data/dashboardData'

function Courses() {

  return (
    <div>
      {/* Page Header */}
      <div className="mb-8">
        <p className="text-sm text-violet-400">Academic</p>

        <h1 className="mt-1 text-3xl font-bold text-white">
          My Courses
        </h1>

        <p className="mt-2 text-slate-400">
          Track your learning progress and course assignments.
        </p>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {courses.map((course) => (
          <div
            key={course.code}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/10 hover:shadow-xl hover:shadow-violet-500/10"
          >
            {/* Course Banner */}
            <div
              className={`h-2 bg-gradient-to-r ${course.color}`}
            />

            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-slate-500">
                    {course.code}
                  </p>

                  <h2 className="mt-1 text-xl font-semibold text-white">
                    {course.name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    {course.lecturer}
                  </p>
                </div>

                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${course.color}`}
                >
                  <BookOpen size={21} className="text-white" />
                </div>
              </div>

              {/* Progress */}
              <div className="mt-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    Course Progress
                  </span>

                  <span className="text-xs font-semibold text-white">
                    {course.progress}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-slate-800">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${course.color}`}
                    style={{ width: `${course.progress}%` }}
                  />
                </div>
              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/5 bg-slate-900/60 p-3">
                  <div className="flex items-center gap-2 text-slate-400">
                    <CheckCircle2 size={16} />
                    <span className="text-xs">Completed</span>
                  </div>

                  <p className="mt-2 text-lg font-semibold text-white">
                    {course.completed}/{course.total}
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-slate-900/60 p-3">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock3 size={16} />
                    <span className="text-xs">Assignments</span>
                  </div>

                  <p className="mt-2 text-lg font-semibold text-white">
                    {course.assignments}
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="mt-5 w-full rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-medium text-slate-300 transition hover:bg-violet-600 hover:text-white">
                View Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Courses