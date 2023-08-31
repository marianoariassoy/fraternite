const ServiciosItem = () => {
  return (
    <article className='flex flex-col gap-y-4'>
      <div className='relative'>
        <img
          src='https://images.pexels.com/photos/6753871/pexels-photo-6753871.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
          alt=''
          className='aspect-video object-cover h-full w-full'
        />
      </div>
      <p className='text-wrap text-sm'>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
        suscipit lobortis nisl ut aliquip ex ea commodo conse
      </p>
    </article>
  )
}

export default ServiciosItem
