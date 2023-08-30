import { menu } from '../data/data.ts'
import { Facebook, Instagram, Linkedin } from '../icons/icons'

const Footer = () => {
  return (
    <>
      <div className='m-auto max-w-7xl px-14 py-12 text-white w-full bg-primary flex justify-center flex-col items-center gap-y-4 shadow-main'>
        <nav className='nav-footer'>
          <ul className='flex gap-x-3 items-center'>
            {menu.map((item, index) => (
              <>
                <li key={index}>
                  <a
                    href={`#${item.name.toLocaleLowerCase}`}
                    className='scroll hover:text-white hover:opacity-70'
                  >
                    {item.name}
                  </a>
                </li>
                <li>|</li>
              </>
            ))}
          </ul>
        </nav>
        <ul className='flex gap-x-3 items-center'>
          <li>
            <a
              href='https://www.facebook.com/profile.php?id=100094055403422'
              target='_blank'
              rel='noreferrer'
              className='hover:text-white hover:opacity-70'
            >
              <Facebook />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/fraternite.23/'
              target='_blank'
              rel='noreferrer'
              className='hover:text-white hover:opacity-70'
            >
              <Instagram />
            </a>
          </li>

          <li>
            <a
              href='https://www.linkedin.com/in/luis-j-chiliguay-0438201b4'
              target='_blank'
              rel='noreferrer'
              className='hover:text-white hover:opacity-70'
            >
              <Linkedin />
            </a>
          </li>
        </ul>
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
