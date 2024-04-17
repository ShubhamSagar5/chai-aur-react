import {configureStore} from '@reduxjs/toolkit'
import TodoSlice from './TodoSlice'


const TodoStore = configureStore({
    reducer:{
        todo:TodoSlice
    }
})

export default TodoStore