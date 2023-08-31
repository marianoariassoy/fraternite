import { Link } from 'wouter'
const ServiciosItem = ({ data }) => {
  return (
    <article className='flex flex-col gap-y-4'>
      <Link href={`/post/${data.id}`}>
        <a className='relative'>
          <div className='bg-black/50 backdrop-blur-sm h-full w-full absolute flex justify-center items-center text-white font-bold text-4xl opacity-0 hover:opacity-100 transition-all cursor-pointer'>
            +
          </div>
          <img
            src={data.image}
            alt={data.title}
            className='aspect-video object-cover h-full w-full'
          />
        </a>
      </Link>

      <p className='text-wrap text-sm whitespace-pre-wrap'>{data.text}</p>
    </article>
  )
}

export default ServiciosItem
