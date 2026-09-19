import { Clock, MapPin } from 'lucide-react'
import { schedule as scheduleData } from '../data/dashboardData'

function Schedule() {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Today&apos;s Schedule
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Your classes for today
          </p>
        </div>

        <button className="rounded-lg px-3 py-2 text-sm text-violet-400 transition hover:bg-violet-500/10 hover:text-violet-300">
          View all
        </button>
      </div>

      <div className="space-y-4">
        {scheduleData.map((schedule) => (
          <div
            key={schedule.id}
            className="flex items-center gap-4 rounded-xl border border-white/5 bg-slate-900/60 p-4 transition hover:border-white/10 hover:bg-slate-900"
          >
            <div className="h-12 w-1 rounded-full bg-violet-500" />

            <div className="w-32 shrink-0">
              <p className="text-sm font-semibold text-white">
                {schedule.time}
              </p>

              <p className="mt-1 text-xs text-slate-500">
                {schedule.code}
              </p>
            </div>

            <div className="flex-1">
              <h3 className="text-sm font-semibold text-white">
                {schedule.subject}
              </h3>

              <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-slate-500">
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
        ))}
      </div>
    </section>
  )
}

export default Schedule