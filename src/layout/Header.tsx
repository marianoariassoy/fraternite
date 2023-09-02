import { menu } from '../data/data.ts'
import Search from './Search.tsx'
import Social from './Social.tsx'
import Location from './Location.tsx'
import { Link, useRoute } from 'wouter'

const Header = () => {
  const [isActivePost] = useRoute('/post/:id')
  const OpenMenu = () => {
    document.querySelector('.nav-menu')?.classList.toggle('active')
    document.querySelector('.menu-mobile')?.classList.toggle('hidden')
  }

  return (
    <div className='flex items-center justify-between relative m-auto max-w-6xl px-6 pb-6 pt-16'>
      <div className='flex gap-x-8 items-center justify-between w-full lg:w-auto'>
        <Link href='/'>
          <a
            target='#Home'
            className={`${isActivePost ? '' : 'scroll'}`}
          >
            <img
              src='/images/logo.svg'
              alt='Logo Fraternite'
              className='-mt-4 lg:-mt-8 hover:opacity-80 transition-all w-32 lg:w-36'
            />
          </a>
        </Link>
        <img
          src='/images/secretaria.svg'
          alt='Logo Fraternite'
        />
      </div>
      <div className='hidden lg:inline-block'>
        <nav>
          <ul className='flex gap-x-10 items-center font-bold text-secondary'>
            {menu.map((item, index) => (
              <li key={index}>
                <Link href={`/${item.name}`}>
                  <a
                    target={`#${item.name}`}
                    className={`${item.name === 'Contacto' ? 'scroll' : isActivePost ? '' : 'scroll'}`}
                  >
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className='gap-x-4 items-center hidden lg:flex text-primary'>
        <Social />
        <Search />
      </div>
      <div className='absolute right-8 top-12 hidden lg:flex'>
        <Location />
      </div>

      <div
        className='nav-menu text-secondary'
        onClick={OpenMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}

export default Header
