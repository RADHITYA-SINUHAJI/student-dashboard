
import { Bell, Search, Sun, Moon } from 'lucide-react'

function Header({ theme, onToggleTheme }) {
  const isDark = theme === 'dark'

  return (
    <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
      {/* Page Header */}
      <div>
        <p
          className={`text-sm ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          Thursday, August 27, 2026
        </p>

        <h1
          className={`mt-1 text-3xl font-bold ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          Good afternoon, Student 👋
        </h1>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {/* Search */}
        <div
          className={`flex w-64 items-center gap-2 rounded-xl border px-4 py-2.5 ${
            isDark
              ? 'border-white/10 bg-white/5'
              : 'border-slate-200 bg-white'
          }`}
        >
          <Search size={18} className="text-slate-400" />

          <input
            type="text"
            placeholder="Search..."
            className={`w-full bg-transparent text-sm outline-none ${
              isDark
                ? 'text-white placeholder:text-slate-500'
                : 'text-slate-900 placeholder:text-slate-400'
            }`}
          />
        </div>

        {/* Theme Toggle */}
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={
            isDark ? 'Aktifkan Light Mode' : 'Aktifkan Dark Mode'
          }
          title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          className={`rounded-xl border p-3 transition ${
            isDark
              ? 'border-white/10 bg-white/5 text-amber-300 hover:bg-white/10 hover:text-amber-200'
              : 'border-slate-200 bg-white text-violet-600 hover:bg-slate-100'
          }`}
        >
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </button>

        {/* Notification */}
        <button
          type="button"
          aria-label="Notifications"
          className={`relative rounded-xl border p-3 transition ${
            isDark
              ? 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
              : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-100'
          }`}
        >
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-violet-500" />
        </button>

        {/* Profile */}
        <div
          className={`flex items-center gap-3 rounded-xl border px-3 py-2 ${
            isDark
              ? 'border-white/10 bg-white/5'
              : 'border-slate-200 bg-white'
          }`}
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-bold text-white">
            S
          </div>

          <div className="hidden sm:block">
            <p
              className={`text-sm font-medium ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Student
            </p>

            <p className="text-xs text-slate-500">
              Computer Science
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header