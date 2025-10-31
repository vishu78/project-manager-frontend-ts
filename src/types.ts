export interface Project {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
}

export interface Task {
  id: string;
  title: string;
  dueDate?: string;
  isCompleted: boolean;
  projectId: string;
}
