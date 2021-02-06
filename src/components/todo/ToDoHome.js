import React, {useState} from 'react';
import data from "./data.json";
import './todo.css';
import ToDoForm from "./ToDoForm";
import ToDoList from "./ToDoList";

const ToDoHome = () => {
    const [ toDoList, setToDoList ] = useState(data);

    // todo <-> completed toggle
    const handleToggle = (id) =>{
        let mapped = toDoList.map(data=>{
            return data.id === Number(id) ? {...data, complete : !data.complete} : {...data}
        });
        setToDoList(mapped);
    }

    // completed delete
    const handleFilter = () =>{
        let filtered = toDoList.filter(data=>{
            return !data.complete; // completed가 false인 것만 남김
        });
        setToDoList(filtered);
    }

    // add task
    const addTask = (userInput) =>{
        //  상태를 직접 조작하지 않도록 작업관리 목록의 복사본을 만든다.
        let copy = [...toDoList];

        // 문자열의 공백을 제거
        let msgTrim = userInput.replace(/(\s*)/g, '');

        if (msgTrim.length !== 0) {
            // 그런 다음 복사 범위와 끝에 새 목록 항목에 태그를 지정하여 새 배열에 복사를 재할당함
            copy = [...copy, {id : toDoList.length + 1, task : userInput, complete : false} ];

            // copy.push({id: toDoList.length + 1, task: userInput, complete: false });
            setToDoList(copy);
        }else{
            // 문자열이 없을때
            window.alert('please enter task.');
        }
    }


    const deleteTask = (id) => {
    let deleted = toDoList.filter(data=>{
        return data.id !== Number(id); // 
    });
    setToDoList(deleted);
    };

    const editTask = (id,text) =>{
        // let deleted = toDoList.filter(data=>{
        //     return data.id !== id
        // });
        // setToDoList(deleted);
        let edited = toDoList.map(data=>{
            return data.id === Number(id) ? {...data, task : text} : {...data}
        });
        setToDoList(edited);
    }

    return (
        <div className="todo-list">
          <h1 className="title">To Do</h1>
          <ToDoForm addTask={addTask} />
          <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} deleteTask={deleteTask} editTask={editTask}/>
        </div>
    );
};

export default ToDoHome;
