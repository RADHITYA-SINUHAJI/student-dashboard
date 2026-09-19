import { useState } from 'react'
import { X } from 'lucide-react'
import { useTasks } from '../../context/TaskContext'
import { courses } from '../../data/dashboardData'

function EditTaskModal({ task, onClose }) {
  const { updateTask } = useTasks()

  const formatDateTimeLocal = (value) => {
    if (!value) return ''

    if (/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(value)) {
      return value
    }

    if (value.includes('T')) {
      return value.slice(0, 16)
    }

    return ''
  }

  const [form, setForm] = useState({
    title: task.title || '',
    course: task.course || courses[0]?.name || '',
    deadline: formatDateTimeLocal(task.deadline || task.due),
    priority: task.priority || 'medium',
  })

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.title.trim() || !form.deadline) {
      return
    }

    updateTask(task.id, {
      title: form.title.trim(),
      course: form.course,
      deadline: form.deadline,
      priority: form.priority,
    })

    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="w-full max-w-lg rounded-2xl border border-white/10 bg-slate-900 p-6 shadow-2xl shadow-violet-950/30">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-violet-400">
              Task Manager
            </p>

            <h2 className="mt-1 text-xl font-semibold text-white">
              Edit Task
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label
              htmlFor="edit-task-title"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Task Title
            </label>

            <input
              id="edit-task-title"
              name="title"
              type="text"
              value={form.title}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              autoFocus
            />
          </div>

          {/* Course */}
          <div>
            <label
              htmlFor="edit-task-course"
              className="mb-2 block text-sm font-medium text-slate-300"
            >
              Course
            </label>

            <select
              id="edit-task-course"
              name="course"
              value={form.course}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
            >
              {courses.map((course) => (
                <option key={course.id} value={course.name}>
                  {course.name}
                </option>
              ))}
            </select>
          </div>

          {/* Deadline + Priority */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label
                htmlFor="edit-task-deadline"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Deadline
              </label>

              <input
                id="edit-task-deadline"
                name="deadline"
                type="datetime-local"
                value={form.deadline}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              />
            </div>

            <div>
              <label
                htmlFor="edit-task-priority"
                className="mb-2 block text-sm font-medium text-slate-300"
              >
                Priority
              </label>

              <select
                id="edit-task-priority"
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-sm text-white outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 px-4 py-2.5 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-violet-600/20 transition hover:bg-violet-500"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditTaskModal