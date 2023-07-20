
import { useState } from "react";

const TodoList =()=>{
    const [text,setText] =useState('');
    const [todos,setTodos]=useState([]);


    const handleChange= (event) =>{
        const value =event.target.value;
        setText(value);
    };

    const addTodo =() => {
        if (text ){
        setTodos([...todos,
            {completed :false,
                title:text,
            },
        ]);
        setText('')
    }};

    const handleCheckBoxChange =(event,index)=>{
        const checked =event.target.checked;
        const new_todos = todos.map((todo, idx)=>{
            if(idx === index){
                return {
                    title : todo.title,
                    completed : checked,
                };
            }
            return todo;
        });
        setTodos(new_todos);
    };

    console.log(todos);

    return( 
    <div>
        <h1>My ToDo List</h1>
        <div>
            <div>
                <input type="text" value ={text} onChange={handleChange}/>
                <button onClick={addTodo}>Add todo </button>
            </div>
            <div>
                <ul>
                    {todos.map((todo, index)=>(
                        <li key={index} >
                            <input type="checkbox" 
                            checked={todo.completed} 
                            onChange={function(event) {
                                handleCheckBoxChange (event,index);
                                
                            }}
                            />
                            {todo.title}
                        </li>
                    ))}
                    
                </ul>
            </div>
        </div>
        
        
    </div>);
};

export default TodoList;