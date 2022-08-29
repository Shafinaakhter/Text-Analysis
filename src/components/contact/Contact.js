import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="c-wrapper">

          <div className="c-left">
            <span>Get In Touch</span>
            <span>Contac Me..</span>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, consectetur repudiandae! Fugiat, nulla iure inventore quidem debitis perferendis itaque dolores suscipit doloremque saepe voluptate corrupti ipsum sunt dolorem ex mollitia.</p>
          </div>

          <div className="c-right">
          <div className="c-right">
                <form>
                    <input type="text" name='user-name' className='user' placeholder='Name'/>
                    <input type="email" name='user-mail' className='user' placeholder='Email'/>
                    <textarea name='message' className='user' placeholder='Message'/>
                    <input type="submit" className='c-button' value="Send"/>
                   
                </form>
            </div>
          </div>
        </div>
      </div>
    </div>   
  )
}

export default Contact