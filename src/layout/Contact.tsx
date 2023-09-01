import Form from './Form'
import Location from './Location'

const Contact = () => {
  return (
    <section
      className='bg-gray-200 bg-cover bg-center'
      id='Contacto'
    >
      <div className='m-auto max-w-6xl px-6 py-12'>
        <h1 className='font-extrabold mb-8 text-primary'>CONTACTO</h1>
        <div className='m-auto max-w-xl flex flex-col gap-y-8 items-center justify-center'>
          <img
            src='/images/logo-white.svg'
            alt='Logo Fraternite Blanco'
            className='w-32 lg:w-40'
          />
          <div className='bg-white rounded-xl w-full p-8 text-secondary text-center'>
            <Form />
            <div className='mt-4 flex justify-center'>
              <Location />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
