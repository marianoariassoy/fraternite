import Form from './Form'
import { Pin, WhatsApp } from '../icons/icons'
const Contact = () => {
  return (
    <section
      className='bg-gray-200 bg-cover bg-center'
      id='Contacto'
    >
      <div className='m-auto max-w-7xl px-6 py-12'>
        <h1 className='font-extrabold mb-8 text-primary'>CONTACTO</h1>
        <div className='m-auto max-w-xl flex flex-col gap-y-8 items-center justify-center'>
          <img
            src='/images/logo-white.svg'
            alt='Logo Fraternite Blanco'
            className='w-32 lg:w-40'
          />
          <div className='bg-white rounded-xl w-full p-8 text-secondary text-center'>
            <Form />
            <div className='flex gap-x-4 items-center justify-center mt-4 text-primary'>
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
        </div>
      </div>
    </section>
  )
}

export default Contact
