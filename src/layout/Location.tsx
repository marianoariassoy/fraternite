import { Pin, WhatsApp } from '../icons/icons'

const Location = () => {
  return (
    <div className='flex gap-x-4 items-center text-primary'>
      <div className='flex gap-x-1 items-center'>
        <Pin />
        <span className='text-secondary text-sm'>Av. Esteco N° 155 </span>
      </div>
      <div className='flex gap-x-1 items-center'>
        <WhatsApp />
        <span className='text-secondary text-sm'>+54 9 3876 83-8814</span>
      </div>
    </div>
  )
}

export default Location
