import { createContext, useContext, useEffect, useState } from 'react'
import { tasks as initialTasks } from '../data/dashboardData'

const TaskContext = createContext()

const STORAGE_KEY = 'galaxy_tasks'

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem(STORAGE_KEY)

      return savedTasks
        ? JSON.parse(savedTasks)
        : initialTasks
    } catch (error) {
      console.error('Failed to load tasks:', error)
      return initialTasks
    }
  })

  // Simpan tasks setiap kali data berubah
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  // Toggle completed
  const toggleTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    )
  }

  // Tambah task
  const addTask = (task) => {
    const newTask = {
      id: Date.now(),
      completed: false,
      ...task,
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      newTask,
    ])
  }

  // Update task
  const updateTask = (id, updatedTask) => {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              ...updatedTask,
            }
          : task,
      ),
    )
  }

  // Hapus task
  const deleteTask = (id) => {
    setTasks((currentTasks) =>
      currentTasks.filter((task) => task.id !== id),
    )
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        updateTask,
        deleteTask,
        toggleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}

export function useTasks() {
  return useContext(TaskContext)
}