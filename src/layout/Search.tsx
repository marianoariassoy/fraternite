import { Zoom } from '../icons/icons'

const Search = () => {
  return (
    <div className='flex gap-x-2 items-center text-secondary'>
      <input
        type='text'
        className='w-32 h-8 bg-transparent pr-8 border-b border-[#1C396A]'
      />
      <Zoom />
    </div>
  )
}

export default Search
