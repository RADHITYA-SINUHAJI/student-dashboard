import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast'

const TaskContext = createContext()
const API_URL = 'http://localhost:5000/api/tasks'

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  // Ambil data tugas
  const fetchTasks = async () => {
    try {
      const response = await axios.get(API_URL)
      setTasks(response.data)
    } catch (error) {
      console.error('Gagal mengambil data tugas:', error)
      toast.error('Gagal terhubung ke server backend!')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  // Tambah tugas baru
  const addTask = async (newTask) => {
    try {
      await axios.post(API_URL, newTask)
      toast.success('Tugas baru berhasil ditambahkan! 🎉')
      fetchTasks()
    } catch (error) {
      console.error('Gagal menambah tugas:', error)
      toast.error('Gagal menambahkan tugas.')
    }
  }

  // Toggle status tugas
  const toggleTask = async (id) => {
    try {
      await axios.patch(`${API_URL}/${id}/toggle`)
      toast.success('Status tugas berhasil diperbarui!')
      fetchTasks()
    } catch (error) {
      console.error('Gagal mengubah status tugas:', error)
      toast.error('Gagal mengubah status tugas.')
    }
  }

  // Hapus tugas
  const deleteTask = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`)
      toast.success('Tugas berhasil dihapus! 🗑️')
      fetchTasks()
    } catch (error) {
      console.error('Gagal menghapus tugas:', error)
      toast.error('Gagal menghapus tugas.')
    }
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        loading,
        addTask,
        toggleTask,
        deleteTask,
      }}
    >
      <Toaster position="top-right" reverseOrder={false} />
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  return useContext(TaskContext)
}