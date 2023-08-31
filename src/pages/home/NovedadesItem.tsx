import { Link } from 'wouter'

const NovedadesItem = ({ data }) => {
  return (
    <article className='flex flex-col gap-y-4'>
      <div>
        <div className='w-full py-1 px-4 bg-primary rounded-md mb-2'>{data.subtitle}</div>
      </div>
      <Link href={`/post/${data.id}`}>
        <a className='relative'>
          <div className='bg-black/50 backdrop-blur-sm h-full w-full absolute flex justify-center items-center text-white font-bold text-4xl opacity-0 hover:opacity-100 transition-all cursor-pointer'>
            +
          </div>
          <img
            src={data.image}
            alt={data.title}
            className='aspect-video lg:aspect-square object-cover h-full w-full'
          />
        </a>
      </Link>
      <p className='text-wrap text-sm whitespace-pre-wrap'>{data.text}</p>
    </article>
  )
}

export default NovedadesItem
