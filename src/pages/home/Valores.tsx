import { servicios } from '../../data/data'

const Valores = () => {
  return (
    <section id='Valores'>
      <div className='m-auto max-w-6xl px-6 py-12'>
        <h1 className='font-extrabold mb-8 text-primary'>VALORES</h1>

        <section className='grid grid-cols-3 md:grid-cols-5 xl:grid-cols-5 gap-4  items-start text-center'>
          {servicios.map((item, index) => (
            <article
              className='flex flex-col justify-center gap-y-2'
              key={index}
            >
              <div className='flex justify-center'>
                <img
                  src={`./images/${item.image} `}
                  alt={item.name}
                  className='w-14 lg:w-16'
                />
              </div>
              <div className={`${index % 2 === 0 ? 'text-secondary' : 'text-primary'}  text-sm font-bold`}>
                {item.name}
              </div>
              <p className='text-sm'>{item.description}</p>
            </article>
          ))}
        </section>
      </div>
    </section>
  )
}

export default Valores
