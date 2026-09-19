import { Bell, Search } from 'lucide-react'

function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <p className="text-sm text-slate-400">Thursday, August 27, 2026</p>
        <h1 className="mt-1 text-3xl font-bold text-white">
          Good afternoon, Student 👋
        </h1>
      </div>

      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="flex w-64 items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">
          <Search size={18} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
          />
        </div>

        {/* Notification */}
        <button className="relative rounded-xl border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:bg-white/10 hover:text-white">
          <Bell size={20} />

          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-violet-500" />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-600 text-sm font-bold">
            S
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-medium text-white">Student</p>
            <p className="text-xs text-slate-500">Computer Science</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header