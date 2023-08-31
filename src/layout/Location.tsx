import { Pin, WhatsApp } from '../icons/icons'

const Location = () => {
  return (
    <div className='flex gap-x-4 items-center text-primary'>
      <div className='flex gap-x-1 items-center'>
        <Pin />
        <a
          href='https://www.google.com/maps/place/Esteco+155,+A4400+Salta/@-24.7914,-65.419,17z/data=!4m6!3m5!1s0x941bc3b02a1bac3b:0x18abeadb49015b26!8m2!3d-24.7911221!4d-65.4189739!16s%2Fg%2F11jtch4k70?hl=es&entry=ttu/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-secondary text-sm'
        >
          Av. Esteco N° 155
        </a>
      </div>
      <div className='flex gap-x-1 items-center'>
        <WhatsApp />
        <a
          href='https://api.whatsapp.com/send?phone=5493876838814'
          target='_blank'
          rel='noopener noreferrer'
          className='text-secondary text-sm'
        >
          +54 9 3876 83-8814
        </a>
      </div>
    </div>
  )
}

export default Location
