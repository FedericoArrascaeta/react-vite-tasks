import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
export const TaskContext = createContext();
import { tasks as data } from "../data/task";

export const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const createTask = ({ title, description }) =>
    setTasks([
      ...tasks,
      {
        title: title,
        id: tasks.length,
        description: description,
      },
    ]);

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    setTasks(data);
  }, []);
  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        deleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
