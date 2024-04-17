import { FC } from 'react'
import cn from 'clsx'
import { BsFillTrashFill } from 'react-icons/bs'

import { ITodo } from '../models/ITodo'
import { useDeleteTodo } from '../hooks/todos/useDeleteTodo'


interface ITodoItemProps {
    item: ITodo
}

const TodoItem: FC<ITodoItemProps> = ({ item }) => {

    const { mutate: deleteTodo } = useDeleteTodo()

    const onDelete = () => {
        deleteTodo(item.id)
    }

    return <div className='flex gap-2 text-[26px]'>
        <b>{item.id}.</b>
        <h1 className={cn(
            item.completed && 'line-through'
        )}>  {item.title}</h1>
        <div className='w-12 cursor-pointer flex gap-2 justify-center items-center'>
            <input className='h-6 w-6' defaultChecked={item.completed} type={'checkbox'} />
            <BsFillTrashFill onClick={onDelete} />
        </div>
    </div>
}

export default TodoItem