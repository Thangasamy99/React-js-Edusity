import './About.css'
import about from '../../assets/about.png'
import play from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about} className='about-img' />
             <img src={play} className='play-icon' />

        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurturing Tommorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis,
                 pariatur! Autem doloribus sapiente, recusandae repellendus culpa
                  accusantium corrupti similique voluptatibus officiis
                   dolor nemo aut eaque corporis! Cumque dicta quae magni eos 
                cupiditate corrupti! Iusto laudantium perferendis iste nobis facere quo.</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Aut ipsam harum aspernatur unde iure non optio in sit voluptatibus molestiae!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, quis, 
                unde cum ducimus facilis voluptatibus fugit nam labore autem soluta sequi 
                voluptate, maxime culpa corporis? Dicta laborum molestias ad ipsam.</p>                 
        </div>
    </div>
  )
}

export default About