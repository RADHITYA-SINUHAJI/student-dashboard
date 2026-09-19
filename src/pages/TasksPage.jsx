import { useMemo, useState } from 'react'
import {
  Check,
  Circle,
  Clock3,
  ListTodo,
  Pencil,
  Plus,
  Trash2,
} from 'lucide-react'
import { useTasks } from '../context/TaskContext'
import AddTaskModal from '../components/tasks/AddTaskModal'
import EditTaskModal from '../components/tasks/EditTaskModal'

function TasksPage() {
  const { tasks, toggleTask, deleteTask } = useTasks()

  const [filter, setFilter] = useState('all')
  const [showAddTask, setShowAddTask] = useState(false)
  const [editingTask, setEditingTask] = useState(null)
  const [deletingTask, setDeletingTask] = useState(null)

  const filteredTasks = useMemo(() => {
    if (filter === 'completed') {
      return tasks.filter((task) => task.completed)
    }

    if (filter === 'pending') {
      return tasks.filter((task) => !task.completed)
    }

    return tasks
  }, [tasks, filter])

  const completedCount = tasks.filter(
    (task) => task.completed,
  ).length

  const totalCount = tasks.length

  const progress =
    totalCount > 0
      ? Math.round((completedCount / totalCount) * 100)
      : 0

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-violet-400">
            Productivity
          </p>

          <h1 className="mt-1 text-3xl font-bold text-white">
            My Tasks
          </h1>

          <p className="mt-2 text-slate-400">
            Keep track of your assignments and deadlines.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setShowAddTask(true)}
          className="flex w-fit items-center gap-2 rounded-xl bg-violet-600 px-4 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500"
        >
          <Plus size={18} />
          Add Task
        </button>
      </div>

      {/* Progress Card */}
      <div className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
              <ListTodo size={23} />
            </div>

            <div>
              <p className="text-sm text-slate-400">
                Overall Progress
              </p>

              <p className="mt-1 text-xl font-semibold text-white">
                {completedCount} of {totalCount} tasks completed
              </p>
            </div>
          </div>

          <div className="text-left sm:text-right">
            <p className="text-3xl font-bold text-violet-400">
              {progress}%
            </p>

            <p className="text-xs text-slate-500">
              Keep going!
            </p>
          </div>
        </div>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-slate-800">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-500 to-purple-400 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Filter */}
      <div className="mb-5 flex flex-wrap gap-2">
        {[
          { value: 'all', label: 'All Tasks' },
          { value: 'pending', label: 'Pending' },
          { value: 'completed', label: 'Completed' },
        ].map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => setFilter(item.value)}
            className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
              filter === item.value
                ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/20'
                : 'border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Task List */}
      <div className="space-y-3">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={`group flex flex-col gap-4 rounded-2xl border p-5 transition duration-300 sm:flex-row sm:items-center ${
              task.completed
                ? 'border-emerald-500/10 bg-emerald-500/5'
                : 'border-white/10 bg-white/5 hover:border-violet-400/30 hover:bg-white/10'
            }`}
          >
            {/* Checkbox */}
            <button
              type="button"
              onClick={() => toggleTask(task.id)}
              aria-label={`Mark ${task.title} as ${
                task.completed ? 'pending' : 'completed'
              }`}
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${
                task.completed
                  ? 'border-emerald-500 bg-emerald-500 text-white'
                  : 'border-slate-600 text-transparent hover:border-violet-500'
              }`}
            >
              {task.completed ? (
                <Check size={19} />
              ) : (
                <Circle size={18} />
              )}
            </button>

            {/* Task Info */}
            <div className="min-w-0 flex-1">
              <h2
                className={`font-medium ${
                  task.completed
                    ? 'text-slate-500 line-through'
                    : 'text-white'
                }`}
              >
                {task.title}
              </h2>

              <p className="mt-1 text-sm text-slate-500">
                {task.course}
              </p>
            </div>

            {/* Due Date */}
            <div
              className={`flex items-center gap-2 text-sm ${
                task.completed
                  ? 'text-slate-600'
                  : 'text-slate-400'
              }`}
            >
              <Clock3 size={16} />

              <span>
                {task.due || task.deadline || 'No deadline'}
              </span>
            </div>

            {/* Actions + Status */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setEditingTask(task)}
                aria-label={`Edit ${task.title}`}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-violet-500/10 hover:text-violet-400"
              >
                <Pencil size={16} />
              </button>

              <button
                type="button"
                onClick={() => setDeletingTask(task)}
                aria-label={`Delete ${task.title}`}
                className="rounded-lg p-2 text-slate-500 transition hover:bg-red-500/10 hover:text-red-400"
              >
                <Trash2 size={16} />
              </button>

              <span
                className={`w-fit rounded-full px-3 py-1.5 text-xs font-medium ${
                  task.completed
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'bg-amber-500/10 text-amber-400'
                }`}
              >
                {task.completed ? 'Completed' : 'Pending'}
              </span>
            </div>
          </div>
        ))}

        {filteredTasks.length === 0 && (
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/5 p-10 text-center">
            <p className="text-slate-400">
              No tasks found.
            </p>
          </div>
        )}
      </div>

      {/* Add Task Modal */}
      {showAddTask && (
        <AddTaskModal
          onClose={() => setShowAddTask(false)}
        />
      )}

      {/* Edit Task Modal */}
      {editingTask && (
        <EditTaskModal
          task={editingTask}
          onClose={() => setEditingTask(null)}
        />
      )}

      {deletingTask && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setDeletingTask(null)
            }
          }}
        >
          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-red-950/30">
      <div className="mb-5">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
          <Trash2 size={23} />
        </div>

        <h2 className="text-xl font-semibold text-white">
          Delete Task?
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-400">
          Are you sure you want to delete
          <span className="font-medium text-white">
            {' '}
            "{deletingTask.title}"
          </span>
          ? This action cannot be undone.
        </p>
      </div>

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={() => setDeletingTask(null)}
          className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
        >
          Cancel
        </button>

        <button
          type="button"
          onClick={() => {
            deleteTask(deletingTask.id)
            setDeletingTask(null)
          }}
          className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-red-600/20 transition hover:bg-red-500"
        >
          Delete
        </button>
      </div>
    </div>
  </div>
)} 
    </div>  
  )
}

export default TasksPage