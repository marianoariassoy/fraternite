import { menu } from '../data/data.ts'
import Search from './Search.tsx'
import Social from './Social.tsx'
import { Pin, WhatsApp } from '../icons/icons'

const Header = () => {
  return (
    <div className='flex items-center justify-between relative m-auto max-w-7xl px-14 pb-10 pt-16'>
      <div className='flex gap-x-8 items-center'>
        <a href='#'>
          <img
            src='./images/logo.svg'
            alt='Logo Fraternite'
            className='-mt-9'
          />
        </a>
        <img
          src='./images/secretaria.svg'
          alt='Logo Fraternite'
        />
      </div>
      <div>
        <nav>
          <ul className='flex gap-x-12 items-center font-bold text-secondary'>
            {menu.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.name.toLocaleLowerCase}`}
                  className='scroll'
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='flex gap-x-4 items-center'>
        <Social />
        <Search />
      </div>

      <div className='absolute right-14 top-12 flex gap-x-4 items-center  text-primary'>
        <div className='flex gap-x-1 items-center'>
          <Pin />
          <span className='text-secondary text-sm'>Av. Esteco N° 155 </span>
        </div>
        <div className='flex gap-x-1 items-center'>
          <WhatsApp />
          <span className='text-secondary text-sm'>+54 9 3876 83-8814</span>
        </div>
      </div>
    </div>
  )
}

export default Header
