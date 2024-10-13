import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export const Todo = ({task, deleteTodo,editTodo,toggleComplete}) => {
    return (
        <div className="Todo">
            <p className={`${task.completed ? "completed":"incompleted"}`}
            onClick={()=>toggleComplete(task.id)}>{task.task}
            </p>
        <div>
        <FontAwesomeIcon className="edit-icon icon" icon={faPenToSquare
        }onClick={(e) => editTodo(task.id)}/>
        <FontAwesomeIcon className="deleete-icon" icon={faTrash}
        onClick={(e) => deleteTodo(task.id)}/>
        </div>
    </div>
    )
}