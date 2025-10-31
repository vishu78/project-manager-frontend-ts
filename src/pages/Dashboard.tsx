import { useEffect, useState } from "react";
import api from "../api";
import type { Project } from "../types";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const loadProjects = async () => {
    const res = await api.get("/api/projects");
    setProjects(res.data);
  };

  useEffect(() => { loadProjects(); }, []);

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title required");
    await api.post("/api/projects", { title, description: desc });
    setTitle("");
    setDesc("");
    loadProjects();
  };

  const handleDelete = async (id: string) => {
    await api.delete(`/api/projects/${id}`);
    loadProjects();
  };

  return (
    <div>
      <h2>Your Projects</h2>
      <form onSubmit={handleAdd}>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Project title" />
        <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description (optional)" />
        <button type="submit">Add Project</button>
      </form>

      <ul>
        {projects.map((p) => (
          <li key={p.id}>
            <Link to={`/projects/${p.id}`}>{p.title}</Link>
            <button onClick={() => handleDelete(p.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
