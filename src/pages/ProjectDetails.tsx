import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../api";
import type { Task } from "../types";

export default function ProjectDetails() {
  const { id } = useParams<{ id: string }>();
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");

  const loadTasks = async () => {
    const res = await api.get(`/api/tasks/project/${id}`);
    setTasks(res.data);
  };

  useEffect(() => { loadTasks(); }, [id]);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return alert("Task title required");
    await api.post(`/api/tasks/project/${id}`, { title });
    setTitle("");
    loadTasks();
  };

  const toggleComplete = async (task: Task) => {
    await api.put(`/api/tasks/${task.id}`, { ...task, isCompleted: !task.isCompleted });
    loadTasks();
  };

  const handleDelete = async (taskId: string) => {
    await api.delete(`/api/tasks/${taskId}`);
    loadTasks();
  };

  return (
    <div>
      <Link to="/dashboard">← Back to Dashboard</Link>
      <h2>Tasks</h2>

      <form onSubmit={handleAdd}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="New task title" />
        <button type="submit">Add Task</button>
      </form>

      <ul>
        {tasks.map((t) => (
          <li key={t.id}>
            <span
              onClick={() => toggleComplete(t)}
              style={{ textDecoration: t.isCompleted ? "line-through" : "none", cursor: "pointer" }}
            >
              {t.title}
            </span>
            <button onClick={() => handleDelete(t.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
