import React from 'react'
import Phone_icon_white from '../../../assets/img/contact_img/Phone_icon_black.svg'
import Mail_icon_white from '../../../assets/img/contact_img/mail_icon_black.svg'

export default function addressSection() {
  const mystyle = {
    width: "100%",
    height: "450px",
    border: "0",
  };
  return (
    <>
        <div className="addressSection section-padd-LR">
           <div className="main-container width-1200 flex black">  
              <div className='clm-2'>            
                <h2 data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-delay="1500">Reach Us</h2> 
              </div>    
              <div className='clm-2'> 
                <p className='address-para' data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="1600">No 7, Ground Floor, 4th Cross, Papaiah Garden Road, <br />Banashankari, 3rd Stage, Bangalore - 560085, <br />Karnataka, India</p>
                <div className='mail-dv' data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="400">
                  <img className="icn" src={Mail_icon_white} alt="Email_icon"/>
                  <a href="mailto:connect@mrssupplychain.com">connect@mrssupplychain.com</a>
                </div>
                <div className='phone-dv' data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="600">
                  <img className="icn" src={Phone_icon_white} alt="Phone_icon"/>
                  <a href="tel:+91 26860415">+91 26860415</a>
                </div>
              </div> 
           </div>
        </div>

        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.1605711632833!2d72.83444397583882!3d19.14444734981884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7856a1a3821%3A0x5012c32a62de19e7!2sParashift%20Technologies%20-%20An%20Integrated%20Digital%20Marketing%20Agency!5e0!3m2!1sen!2sin!4v1707222157094!5m2!1sen!2sin" style={mystyle} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      
    </>
  )
}
