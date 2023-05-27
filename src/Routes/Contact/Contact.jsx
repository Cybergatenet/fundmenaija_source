import React from 'react'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import './Contact.css'

const Contact = () => {
  return (
    <>
    <Nav />
    <div className='contact'>
        <div className='contact-left'>
            <h5>Lagos, Nigeria</h5>
            <h5>contact.fundmenaija@gmail.com</h5>
            <h5>contact@fundmenaija.com</h5>
        </div>
        <div className='contact-right'>
            <form action='https://formspree.io/f/xrgvzgar' method='post'>
                <div className='form-child'>
                    <div className='form-grp'>
                        <label>Name</label>
                        <input type="text" name="" placeholder='Enter your full name' />
                    </div>
                    <div className='form-grp'>
                        <label>Email Address</label>
                        <input type="email" name="" placeholder='Enter your email address' />
                    </div>
                </div>
                <div className='form-child'>
                    <div className='form-grp'>
                        <label>Phone Number</label>
                        <input type="tel" name="" placeholder='Enter your Phone Number'/>
                    </div>
                    <div className='form-grp'>
                        <label>Comment</label>
                        <textarea className='form-control'  name="comment" placeholder='Drop a Message'></textarea>
                    </div>
                </div>
                <input type="submit" value="Contact" />
            </form>
        </div>
        
    </div>
    <Footer />
    </>
  )
}

export default Contact