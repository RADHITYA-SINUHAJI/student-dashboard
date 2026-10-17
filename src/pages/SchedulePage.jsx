
import { useState } from 'react'
import {
  CalendarDays,
  Clock3,
  MapPin,
  UserRound,
} from 'lucide-react'
import { schedule } from '../data/dashboardData'

function SchedulePage({ theme }) {
  const [selectedDay, setSelectedDay] = useState('Thu')
  const isDark = theme === 'dark'

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

  const colorStyles = {
    violet: {
      line: 'bg-violet-500',
      icon: 'bg-violet-500/10 text-violet-500',
      badge: 'bg-violet-500/10 text-violet-500',
    },
    blue: {
      line: 'bg-blue-500',
      icon: 'bg-blue-500/10 text-blue-500',
      badge: 'bg-blue-500/10 text-blue-500',
    },
    pink: {
      line: 'bg-pink-500',
      icon: 'bg-pink-500/10 text-pink-500',
      badge: 'bg-pink-500/10 text-pink-500',
    },
    emerald: {
      line: 'bg-emerald-500',
      icon: 'bg-emerald-500/10 text-emerald-500',
      badge: 'bg-emerald-500/10 text-emerald-500',
    },
  }

  const selectedSchedule = schedule.filter(
    (item) => item.day === selectedDay
  )

  const headingClass = isDark ? 'text-white' : 'text-slate-900'
  const mutedClass = isDark ? 'text-slate-400' : 'text-slate-600'

  const cardClass = isDark
    ? 'border-white/10 bg-white/5 hover:border-violet-400/30 hover:bg-white/10'
    : 'border-slate-200 bg-white shadow-sm hover:border-violet-200 hover:bg-violet-50/50'

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-violet-500">
            Academic
          </p>

          <h1 className={`mt-1 text-3xl font-bold ${headingClass}`}>
            Class Schedule
          </h1>

          <p className={`mt-2 ${mutedClass}`}>
            Your classes and activities for today.
          </p>
        </div>

        <div
          className={`flex items-center gap-2 rounded-xl border px-4 py-3 text-sm ${
            isDark
              ? 'border-white/10 bg-white/5 text-slate-300'
              : 'border-slate-200 bg-white text-slate-700'
          }`}
        >
          <CalendarDays size={18} className="text-violet-500" />
          Thursday, August 27
        </div>
      </div>

      {/* Day Selector */}
      <div className="mb-8 grid grid-cols-3 gap-2 sm:grid-cols-7">
        {days.map((day) => (
          <button
            key={day}
            type="button"
            aria-pressed={selectedDay === day}
            onClick={() => setSelectedDay(day)}
            className={`rounded-xl border px-3 py-3 text-sm font-medium transition ${
              selectedDay === day
                ? 'border-violet-500/40 bg-violet-600 text-white shadow-lg shadow-violet-600/20'
                : isDark
                  ? 'border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:bg-violet-50 hover:text-violet-700'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      {/* Schedule List */}
      <div className="space-y-4">
        {selectedSchedule.length > 0 ? (
          selectedSchedule.map((item) => {
            const styles =
              colorStyles[item.color] || colorStyles.violet

            return (
              <div
                key={item.id}
                className={`group relative overflow-hidden rounded-2xl border transition duration-300 hover:shadow-xl hover:shadow-violet-500/5 ${cardClass}`}
              >
                {/* Color Line */}
                <div
                  className={`absolute left-0 top-0 h-full w-1 ${styles.line}`}
                />

                <div className="flex flex-col gap-5 p-5 pl-7 md:flex-row md:items-center">
                  {/* Time */}
                  <div
                    className={`flex min-w-32 items-center gap-2 text-sm ${mutedClass}`}
                  >
                    <Clock3 size={17} className="shrink-0 text-violet-500" />
                    {item.time}
                  </div>

                  {/* Course Details */}
                  <div className="flex min-w-0 flex-1 items-center gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${styles.icon}`}
                    >
                      <CalendarDays size={21} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className={`font-semibold ${headingClass}`}>
                          {item.subject}
                        </h2>

                        <span className="text-xs text-slate-500">
                          {item.code}
                        </span>
                      </div>

                      <div
                        className={`mt-2 flex flex-col gap-1 text-xs sm:flex-row sm:gap-4 ${mutedClass}`}
                      >
                        <span className="flex items-center gap-1.5">
                          <UserRound size={14} />
                          {item.lecturer}
                        </span>

                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          {item.room}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Status */}
                  <span
                    className={`w-fit rounded-full px-3 py-1.5 text-xs font-medium ${styles.badge}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            )
          })
        ) : (
          <div
            className={`rounded-2xl border p-10 text-center ${
              isDark
                ? 'border-white/10 bg-white/5'
                : 'border-slate-200 bg-white shadow-sm'
            }`}
          >
            <CalendarDays
              size={40}
              className={`mx-auto ${
                isDark ? 'text-slate-600' : 'text-slate-400'
              }`}
            />

            <h2 className={`mt-4 text-lg font-semibold ${headingClass}`}>
              No classes scheduled
            </h2>

            <p className={`mt-2 text-sm ${mutedClass}`}>
              There are no classes scheduled for this day.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SchedulePage