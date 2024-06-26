import { FC, FormEvent, useState } from 'react'

import { useCreateTodo } from '../../hooks/todos/useCreateTodo'
import { validateInput } from './helpers';

const Form: FC = () => {

    const [text, setText] = useState('')
    const { mutate: createTodo } = useCreateTodo();

    const changeText = (text: string) => setText(text)

    const onAddTodo = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!validateInput(text))
            return

        createTodo({ text })
        setText('')
    }

    return <form onSubmit={onAddTodo} className='p-[150px] min-w-[300px]  text-black shadow-md bg-slate-50 rounded-xl'>
        <h2 className='mb-4 text-[45px]'>Add todo:</h2>
        <div className='flex flex-col gap-4'>
            <input className='border-4 border-blue-200 p-2 rounded-xl outline-none' value={text} onChange={e => changeText(e.target.value)} type="text" />
            <button className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Add todo
                </span>
            </button>
        </div>
    </form>
}

export default Form