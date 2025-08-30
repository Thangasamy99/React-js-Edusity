import './Contact.css'
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
import arrow from '../../assets/white-arrow.png'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate exercitationem
                reprehenderit aperiam culpa, repellendus, iste rerum voluptates illum possimus provident consectetur maiores iure vero quas.</p>
            <ul>
                <li><img src={mail} alt="" />contact@edusity</li>
                <li><img src={phone} alt="" />123456789</li>
                <li><img src={location} alt="" />chennai</li>
            </ul>
        </div>
        <div className="contact-col">
            <form action="">
                <label >Your Name</label>
                <input type="text" name='name' placeholder='Enter Your Name' required/>
                 <label >Enter Your Number</label>
                 <input type="tel" name='phone' placeholder='Enter Your Mobile Number' required/>
                  <label >Write Your message</label>
                  <textarea name="message"  rows="6" placeholder='Enter Your message' required id=""></textarea>
                  <button className='btn dark'>Submit <img src={arrow} alt="" /></button>
            </form>
            <span></span>
        </div>
    </div>
  )
}

export default Contact