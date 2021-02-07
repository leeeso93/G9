// import { Checkbox } from '@material-ui/core';

import React ,{ useState} from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank , MdModeEdit,MdDelete } from 'react-icons/md';
import Button from 'react-bootstrap/Button';


const TodoItem = ({todo,handleToggle,deleteTask,editTask}) => {

  const [input, setInput] = useState(todo.task);
  const [view, setView] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    handleToggle(e.currentTarget.id)
}

const handleDelete = (e) =>{
  e.preventDefault();
  deleteTask(e.currentTarget.id);
}

const onChange = e => {
  setInput(e.target.value);
};

const handleEdit = (e) => {
  setView(true);
};

  return (
    <div  className="list-box" >
      <div className="list-item">
        <div id={todo.id} value={todo.id}  onClick={handleClick} className={todo.complete ? "float-left strike" : "float-left"} >
          {todo.complete ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          <span className={view ? 'd-none' : ''}>  {todo.task}</span>
        </div>

        <div className={view ? '' : 'd-none'}>
          <input type="text" value={input} onChange={onChange} className="input"/>

          <Button size="sm"  variant="light" className="mr-1"  onClick={() => editTask(todo.id, input)} >
            완료
          </Button>
          <Button  size="sm" variant="light" onClick={() => setView(false)}>
            닫기
          </Button>
        </div>
      </div>
      <div className="button-wrap">
          <Button  variant="outline-primary" className="mr-1"onClick={handleEdit}>
          <MdModeEdit />
        </Button>
        
        <Button  variant="outline-danger"  id={todo.id} value={todo.id} onClick={ handleDelete}>
          <MdDelete/>
        </Button>
        
      </div>
</div>

  );
};

export default TodoItem;
