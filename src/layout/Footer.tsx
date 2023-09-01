import { menu } from '../data/data.ts'
import Social from './Social.tsx'
import { Link, useRoute } from 'wouter'

const Footer = () => {
  const [isActivePost] = useRoute('/post/:id')

  return (
    <>
      <div className='px-6 py-12 text-white w-full bg-primary flex justify-center flex-col items-center gap-y-4 shadow-main'>
        <nav className='nav-footer'>
          <ul className='flex gap-x-3 items-center'>
            {menu.map((item, index) => (
              <>
                <li key={index}>
                  <Link href={`/${item.name}`}>
                    <a
                      target={`#${item.name}`}
                      className={`${
                        item.name === 'Contacto' ? 'scroll' : isActivePost ? '' : 'scroll'
                      } hover:text-black`}
                    >
                      {item.name}
                    </a>
                  </Link>
                </li>
                <li>|</li>
              </>
            ))}
          </ul>
        </nav>
        <div>
          <Social />
        </div>
      </div>
      <div className='px-6 py-4 text-sm text-center'>
        2023 © Fraternité. Centro privado de mediación Registro D.G.M. N° 369. Todos los derechos reservados
        <a
          href='#'
          target='_blank'
          className='block'
        >
          by MCdisenio
        </a>
      </div>
    </>
  )
}

export default Footer
