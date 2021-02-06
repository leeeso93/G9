import React from 'react';
import TodoItem from './TodoItem';
import Button from 'react-bootstrap/Button';
import List from '@material-ui/core/List';

const ToDoList = ({toDoList,handleToggle ,handleFilter,deleteTask,editTask}) => {
   return (
       <div className="list-section">
        <List > 

           {toDoList.map(todo => {
               return (
                   <TodoItem  key={todo.id + todo.task} todo={todo} handleToggle={handleToggle}  deleteTask={deleteTask} editTask={editTask}/>
               )
           })}
            <Button variant="danger" size="sm" onClick={handleFilter}>Clear Completed</Button>
            </List>
       </div>
   );
};
 
export default ToDoList;
