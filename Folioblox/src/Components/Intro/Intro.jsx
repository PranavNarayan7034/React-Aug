import Hero from '../../assets/Heroimage.jpg'
import Navbar from '../Navbar/Navbar'

const Intro = () => {
  return (
    <div
      className='bg- h-[95vh] bg-no-repeat bg-cover bg-center rounded-b-[70px]'
      style={{backgroundImage:`URL(${Hero})`}}>

      <Navbar />
      
      <div className="flex justify-between mt-24 px-16">

        <div className="w-[33vw] flex flex-col gap-8">
          <h4 className='text-green-600 font-nunito text-2xl font-extrabold text-shadow-2xs text-shadow-black/50'>Hey, I'm Lilly,</h4>
          <h1 className='text-white text-[80px] font-extrabold text-shadow-xs text-shadow-black font-nunito leading-24'>Interior Designer</h1>
        </div>

        <div className="w-[33vw] flex flex-col justify-end gap-4">
          <h3 className='text-white text-3xl font-nunito font-bold'>Great design should feel invisible</h3>
          <p className='text-xs text-white/75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, porro. Quae beatae iure culpa porro aspernatur magnam minus, quis officia libero corporis, enim labore dolor iste delectus repellendus saepe
            ipsum.</p>
        </div>

      </div>

      
      
      
    </div>
  )
}

export default Intro