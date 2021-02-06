import React from 'react';
import TodoItem from './TodoItem';
import Button from 'react-bootstrap/Button';

const ToDoList = ({toDoList,handleToggle ,handleFilter,deleteTask,editTask}) => {
   return (
       <div className="list-section">

           {toDoList.map(todo => {
               return (
                   <TodoItem  key={todo.id + todo.task} todo={todo} handleToggle={handleToggle}  deleteTask={deleteTask} editTask={editTask}/>
               )
           })}
            <Button variant="danger" size="sm" className="mt-2 mb-2 w-100"onClick={handleFilter}>Clear Completed</Button>
       </div>
   );
};
 
export default ToDoList;
