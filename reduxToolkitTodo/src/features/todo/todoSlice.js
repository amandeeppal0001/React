import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos:[
        {id:1,text: "hello world"}]
}

// function sayHello(){
// console.log("hello world");
    
// }

export const todoSlice  = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const todo ={
                id: nanoid(),
                text: action.payload,
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload)
        },
        // updateTodo: (state, action) => {
        //     state.todos = state.todos.map((todo) => todo.id === action.payload ? todo.text = "updated" : todo.text = todo.text
        // )
        // }

        updateTodo: (state, action) => {
            const { id, text } = action.payload; // Destructure id and new text from payload
            state.todos = state.todos.map((todo) => 
                todo.id === id ? { ...todo, text: text } : todo
            );

        //delete = remove todo
        // update
        }

    }

})


export const {addTodo,removeTodo,updateTodo} = todoSlice.actions



export default  todoSlice.reducer