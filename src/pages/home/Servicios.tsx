const Servicios = () => {
  return (
    <section
      className='shadow-main'
      id='Servicios'
    >
      <div className='m-auto max-w-7xl px-6 py-12'>
        <h1 className='font-extrabold mb-8 text-primary'>SERVICIOS</h1>
        <section className='grid lg:grid-cols-3 gap-8 items-start'>
          <article className='flex flex-col gap-y-4'>
            <div className='relative'>
              <div className='bg-black/50 backdrop-blur-sm h-full w-full absolute flex justify-center items-center text-white font-bold text-4xl opacity-0 hover:opacity-100 transition-all cursor-pointer'>
                +
              </div>
              <img
                src='https://images.pexels.com/photos/6753871/pexels-photo-6753871.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
                alt=''
                className='aspect-video object-cover h-full w-full'
              />
            </div>
            <p className='text-wrap text-sm'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse
            </p>
          </article>
          <article className='flex flex-col gap-y-4'>
            <div className='relative'>
              <div className='bg-black/50 backdrop-blur-sm h-full w-full absolute flex justify-center items-center text-white font-bold text-4xl opacity-0 hover:opacity-100 transition-all cursor-pointer'>
                +
              </div>
              <img
                src='https://images.pexels.com/photos/6753871/pexels-photo-6753871.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
                alt=''
                className='aspect-video object-cover h-full w-full'
              />
            </div>
            <p className='text-wrap text-sm'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse
            </p>
          </article>
          <article className='flex flex-col gap-y-4'>
            <div className='relative'>
              <div className='bg-black/50 backdrop-blur-sm h-full w-full absolute flex justify-center items-center text-white font-bold text-4xl opacity-0 hover:opacity-100 transition-all cursor-pointer'>
                +
              </div>
              <img
                src='https://images.pexels.com/photos/6753871/pexels-photo-6753871.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
                alt=''
                className='aspect-video object-cover h-full w-full'
              />
            </div>
            <p className='text-wrap text-sm'>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
              laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
              ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo conse
            </p>
          </article>
        </section>
      </div>
    </section>
  )
}

export default Servicios
