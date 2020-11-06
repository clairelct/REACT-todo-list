import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Task from "./components/Task";
import Footer from "./components/Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faListAlt);

function App() {
  // Ecoute state input
  const [newTask, setNewTask] = useState("");
  // Ensemble des tâches
  const [tasks, setTasks] = useState([]);
  // Ecoute state checkbox
  // const [checked, setChecked] = useState(false);

  // FORM (Submit)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Au submit : Stocker les tâches dans un tableau
    const newTasks = [...tasks];
    newTasks.push(newTask); // push, mais apès sur [i]
    setTasks(newTasks);
  };

  return (
    <>
      <Header />

      <div className="container">
        {/* LISTE */}
        <div className="list-container">
          <ul>
            {/* Itérer sur ce tableau pour générer la liste */}
            {tasks.map((task, index) => {
              return (
                <Task
                  key={index}
                  task={task}
                  index={index}
                  tasks={tasks}
                  setTasks={setTasks}
                />
              );
            })}
          </ul>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="new task"
            value={newTask}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
          />
          <input type="submit" value="Add task" />
        </form>
      </div>
      <Footer />
    </>
  );
}

export default App;
