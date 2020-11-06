import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ task, index, tasks, setTasks }) => {
  const [checked, setChecked] = useState(false);

  // SUPPRIMER TÂCHES
  const removeTask = () => {
    // Cibler la tâche à retirer, copier tableau
    const taskToRemove = tasks.indexOf(task);
    const newTasks = [...tasks];
    // Opérer le changement
    newTasks.splice(taskToRemove, 1);
    console.log(newTasks);
    // Renvoyer le nouveau tableau
    setTasks(newTasks);
  };
  return (
    <li style={{ textDecoration: checked && "line-through" }}>
      <div>
        <input
          type="checkbox"
          onClick={() => {
            if (checked === false) {
              setChecked(true);
            } else {
              setChecked(false);
            }
          }}
        />
        <span>{task}</span>
      </div>

      <FontAwesomeIcon
        className="trash-icon"
        icon="trash"
        onClick={removeTask}
      />
    </li>
  );
};

export default Task;
