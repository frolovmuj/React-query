
import { FC, useState } from 'react'
import { useTodos } from '../hooks/todos/useTodos'
import { Form, Pagination, TodoItem } from '.'
import { Loader } from './UI'

const TodoList: FC = () => {

    const [page, setPage] = useState(1);

    const handleChangePage = (page: number) => {
        setPage(page);
    }

    const { isLoading, isSuccess, error, data } = useTodos(page);

    if (error) return 'An error has occurred'

    return <>
        <div className='grid mt-5 grid-cols-[1fr] md:grid-cols-[1fr_1fr] gap-12 justify-items-center'>
            <div className=' min-w-[300px] p-12 mx-auto max-w-4xl text-black shadow-md bg-slate-50 rounded-xl'>
                {isLoading ?
                    <div className='flex flex-col items-center'><Loader /></div>
                    : <>
                        <h1 className='mb-4 text-[45px]'>Todos:</h1> {isSuccess && data.map(d => <TodoItem key={d.id} item={d} />)}
                    </>
                }
            </div>
            <div>
                <Form />
            </div>
        </div>
        <Pagination page={page} handleChangePage={handleChangePage} />
    </>
}

export default TodoList