import {createSlice,nanoid} from '@reduxjs/toolkit'



const todoSlice = createSlice({
    name:"Todo",
    initialState:{
        todos:[{
            id:1,
            message:"Welcome"
        }]
    },
    reducers:{
        addTodo:(state,action) => {
            const todo = {
                id:nanoid(),
                message:action.payload
            }
            state.todos.push(todo)
        },
        deleteTodo:(state,action)=>{
            state.todos =  state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateTodo:(state,action)=>{
            console.log(action.payload)
            const {id,mess} = action.payload
            const findTodo = state.todos.find((todo)=>todo.id === id)
            if(findTodo){
                findTodo.id = id
                findTodo.message = mess

            }
        }
    }

})
export const {addTodo,updateTodo,deleteTodo} = todoSlice.actions
export default todoSlice.reducer