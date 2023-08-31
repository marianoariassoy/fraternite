import { menu } from '../data/data.ts'
import Location from './Location.tsx'
import Social from './Social.tsx'
import { Link, useRoute } from 'wouter'

const MobileMenu = () => {
  const [isActivePost] = useRoute('/post/:id')

  const closeMenu = () => {
    document.querySelector('.nav-menu')?.classList.remove('active')
    document.querySelector('.menu-mobile')?.classList.add('hidden')
  }

  return (
    <div
      className='menu-mobile fade-in w-full h-screen p-6 text-center hidden'
      onClick={closeMenu}
    >
      <nav className='mt-24'>
        <ul className='flex flex-col gap-y-8 items-center font-bold text-secondary'>
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
      <div className='mt-24 flex justify-center'>
        <Location />
      </div>
      <div className='mt-8 flex justify-center text-primary'>
        <Social />
      </div>
    </div>
  )
}

export default MobileMenu
