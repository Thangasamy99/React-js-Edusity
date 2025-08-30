import '../Hero/Hero.css'
import dark from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We ensure better eduaction for a better world</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
           Similique maiores alias eveniet unde omnis adipisci, 
           sed animi illum quisquam? Quia non voluptatem esse
            dignissimos itaque nisi est in veniam ab.</p>
            <button className='btn'>Explore More <img src={dark} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero