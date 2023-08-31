import ServiciosItem from '../posts/ServiciosItem'

const Servicios = () => {
  return (
    <section
      className='shadow-main'
      id='Servicios'
    >
      <div className='m-auto max-w-7xl px-6 py-12'>
        <h1 className='font-extrabold mb-8 text-primary'>SERVICIOS</h1>
        <section className='grid lg:grid-cols-3 gap-8 items-start'>
          <ServiciosItem />
          <ServiciosItem />
          <ServiciosItem />
        </section>
      </div>
    </section>
  )
}

export default Servicios
