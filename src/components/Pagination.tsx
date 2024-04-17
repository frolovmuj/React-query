import { FC } from 'react'


interface iPaginationProps {
  page: number
  handleChangePage: (page: number) => void
}

const Pagination: FC<iPaginationProps> = ({ page, handleChangePage }) => {

  const buttonCn = 'w-[60px] disabled:opacity-75 h-[60px] bg-white rounded-full text-center leading-[60px] text-black'

  return <div className='min-w-[200px] mx-auto flex mt-5 gap-5 items-center justify-center'>
    <button disabled={page === 1} onClick={() => handleChangePage(page - 1)} className={buttonCn}>prev</button>

    <button onClick={() => handleChangePage(page + 1)} className={buttonCn}>next</button>
  </div>
}

export default Pagination