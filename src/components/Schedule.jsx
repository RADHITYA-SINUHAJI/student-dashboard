
import { Clock, MapPin, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { schedule as scheduleData } from '../data/dashboardData'

function Schedule({ theme }) {
  const isDark = theme === 'dark'

  return (
    <section
      className={`rounded-2xl border p-6 transition-colors duration-300 ${
        isDark
          ? 'border-white/10 bg-white/5'
          : 'border-slate-200 bg-white shadow-sm'
      }`}
    >
      {/* Header */}
      <div className="mb-6 flex items-center justify-between gap-3">
        <div>
          <h2
            className={`text-lg font-semibold ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            Today&apos;s Schedule
          </h2>

          <p
            className={`mt-1 text-sm ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            Your classes for today
          </p>
        </div>

        <Link
          to="/schedule"
          className="inline-flex shrink-0 items-center gap-1 rounded-lg px-3 py-2 text-sm text-violet-500 transition hover:bg-violet-500/10 hover:text-violet-600"
        >
          View all
          <ArrowRight size={15} />
        </Link>
      </div>

      {/* Schedule List */}
      <div className="space-y-4">
        {scheduleData.length > 0 ? (
          scheduleData.map((schedule) => (
            <div
              key={schedule.id}
              className={`flex items-center gap-4 rounded-xl border p-4 transition ${
                isDark
                  ? 'border-white/5 bg-slate-900/60 hover:border-white/10 hover:bg-slate-900'
                  : 'border-slate-200 bg-slate-50 hover:border-violet-200 hover:bg-violet-50/50'
              }`}
            >
              {/* Accent */}
              <div className="h-12 w-1 shrink-0 rounded-full bg-violet-500" />

              {/* Time and Course Code */}
              <div className="w-32 shrink-0">
                <p
                  className={`text-sm font-semibold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {schedule.time}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {schedule.code}
                </p>
              </div>

              {/* Class Details */}
              <div className="min-w-0 flex-1">
                <h3
                  className={`text-sm font-semibold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {schedule.subject}
                </h3>

                <div
                  className={`mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    <Clock size={13} />
                    Class
                  </span>

                  <span className="flex items-center gap-1">
                    <MapPin size={13} />
                    {schedule.room}
                  </span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div
            className={`rounded-xl border border-dashed p-8 text-center ${
              isDark
                ? 'border-white/10 text-slate-400'
                : 'border-slate-300 text-slate-500'
            }`}
          >
            <Clock size={28} className="mx-auto mb-3 opacity-60" />

            <p className="text-sm font-medium">
              No classes scheduled yet
            </p>

            <p className="mt-1 text-xs">
              Your upcoming classes will appear here.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Schedule