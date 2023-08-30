import { Facebook, Instagram, Linkedin } from '../icons/icons'

const Social = () => {
  return (
    <ul className='flex gap-x-3 items-center text-primary'>
      <li>
        <a
          href='https://www.facebook.com/profile.php?id=100094055403422'
          target='_blank'
          rel='noreferrer'
          className='hover:text-black'
        >
          <Facebook />
        </a>
      </li>
      <li>
        <a
          href='https://www.instagram.com/fraternite.23/'
          target='_blank'
          rel='noreferrer'
          className='hover:text-black'
        >
          <Instagram />
        </a>
      </li>

      <li>
        <a
          href='https://www.linkedin.com/in/luis-j-chiliguay-0438201b4'
          target='_blank'
          rel='noreferrer'
          className='hover:text-black'
        >
          <Linkedin />
        </a>
      </li>
    </ul>
  )
}

export default Social
