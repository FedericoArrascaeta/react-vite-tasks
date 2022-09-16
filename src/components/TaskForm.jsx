import { useContext } from "react";
import { useState } from "react";
import { TaskContext } from "../context/TaskContext";
TaskContext;

export const TaskForm = () => {
  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    createTask({ title, description });
    setDescription("");
    setTitle("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Añadir tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full  mb-2"
        />
        <textarea
          placeholder="Describe tu tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full  mb-2"
        ></textarea>
        <button className="bg-red-500 px-3 py-1 text-white rounded-md hover:bg-red-300">
          Guardar
        </button>
      </form>
    </div>
  );
};
