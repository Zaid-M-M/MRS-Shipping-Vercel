import React from "react";
import { useEffect } from "react";
import '../../../../assets/css/home.css';
import About_CTA from '../../../../assets/img/about_img/about_CTA.png'
import white_Arrow from '../../../../assets/img/about_img/innerCTA_icon.svg'



export default function innerCTA () {

    useEffect (() =>  {
        
    })
    return (
        <>
        <div className="cta-sec section-padd-LR overflow inner-cta-sec">                  
                <div className="main-container">
                    <div className="client-img-bx global-cta">
                        <img className="first_Company-img" src={About_CTA} alt="About_CTA" data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="600"/>
                        <div className="client-contnt-bx">
                            <h2 className="white ttl-60px" data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="600" >Experience the unique benefits of our strategically located FTWZ facilities.</h2>
                                <div className="client-btn inner-cta-btn enquire_btn" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="600">
                                    <a>Contact Us for Warehousing Excellence <img src={white_Arrow} alt="Arrow" className="inner-cta-img"/></a>
                                </div>
                            
                        </div>                        
                    </div>
                </div> 
                           
        </div>
        </>
    )
}