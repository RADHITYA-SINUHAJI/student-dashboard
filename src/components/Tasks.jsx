import {
  CheckCircle2,
  Circle,
  Clock3,
} from 'lucide-react'
import { useTasks } from '../context/TaskContext'
import { useNavigate } from 'react-router-dom'

function Tasks() {
  const { tasks, toggleTask } = useTasks()
  const navigate = useNavigate()

  return (
    <section className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-white">
            Upcoming Tasks
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Keep track of your assignments
          </p>
        </div>

        <button
          type="button"
          onClick={() => navigate('/tasks')}
          className="rounded-lg px-3 py-2 text-sm text-violet-400 transition hover:bg-violet-500/10 hover:text-violet-300"
        >
          View all
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`flex items-center gap-3 rounded-xl border p-4 transition ${
              task.completed
                ? 'border-emerald-500/10 bg-emerald-500/5'
                : 'border-white/5 bg-slate-900/60'
            }`}
          >
            {/* Checkbox */}
            <button
              type="button"
              onClick={() => toggleTask(task.id)}
              aria-label={`Mark ${task.title} as ${
                task.completed ? 'pending' : 'completed'
              }`}
              className="shrink-0 rounded-full transition hover:scale-110"
            >
              {task.completed ? (
                <CheckCircle2
                  size={21}
                  className="text-emerald-400"
                />
              ) : (
                <Circle
                  size={21}
                  className="text-slate-600 hover:text-violet-400"
                />
              )}
            </button>

            {/* Task Info */}
            <div className="min-w-0 flex-1">
              <h3
                className={`truncate text-sm font-medium ${
                  task.completed
                    ? 'text-slate-500 line-through'
                    : 'text-white'
                }`}
              >
                {task.title}
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                {task.course}
              </p>
            </div>

            {/* Due Date */}
            <div
              className={`hidden items-center gap-1 text-xs sm:flex ${
                task.completed
                  ? 'text-slate-600'
                  : 'text-slate-500'
              }`}
            >
              <Clock3 size={13} />
              {task.deadline || task.due || 'No deadline'}
            </div>
          </div>
        ))}

        {tasks.length === 0 && (
          <div className="rounded-xl border border-dashed border-white/10 p-6 text-center">
            <p className="text-sm text-slate-500">
              No tasks yet.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Tasks