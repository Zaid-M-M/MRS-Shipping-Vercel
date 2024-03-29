import React, { useEffect } from 'react';
import '../../../../assets/css/about.css'   
import '../../../../assets/css/Services/MultiuserWarehousing.css'
import '../../../../assets/css/Services/pioneeringWarehousing.css'
import Line from '../../../../assets/img/home_img/Line.svg'
import Warehousing_Solution from '../../../../assets/img/services_img/LastMileDelivery/Tech-DrivenLast.jpg'


export default function CustomsServicesSpotlight () {

    useEffect (() =>  {
        
    })

    return (
        <>
        <div className="service-spotlight custom-brokerage-sec section inner-spotlight-sec section-padd-LR overflow" id='brown-bg'>
            <div className="main-container width-1250 flex">
                <div className="inner-spot-clm-1 servcs-spot-clm1">
                    <h1 className="js-split-text white">Tech-Driven Last-Mile <br />Delivery Services</h1>
                    <h2 className="sldr-sub-ttl" data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-delay="800">Dependable. Streamlined.</h2>
                    <img src={Line} alt="Line" data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="900"/>
                    <p className="white" data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-delay="900">Revolutionising Last-Mile Delivery</p>
                    {/* <a className="btn inner-spt-btn white" href="#" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="600">Home {' > '} Services {' > '} Last-Mile Delivery</a> */}

                    <div className="btn inner-spt-btn white" data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-delay="900">
                        <a className='white-60' href="/">Home </a>{' > '}
                        <a className='white-60' href="#">Services </a>{' > '}
                        <a className='white-60' >Last-Mile Delivery</a>
                    </div>
                </div>                
            </div>
            <div className="inner-img-sec">                
                <div className="inner-spot-clm-2">                    
                    <img src={Warehousing_Solution} alt="supplyChainImage" className='lToR' data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="1000"/>                    
                </div>
            </div>

        </div>
        
        </>
    )
}