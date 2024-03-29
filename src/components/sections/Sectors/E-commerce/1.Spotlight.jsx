import React, { useEffect } from 'react';
import '../../../../assets/css/about.css'   
import '../../../../assets/css/Services/MultiuserWarehousing.css'
import '../../../../assets/css/Services/pioneeringWarehousing.css'
import Line from '../../../../assets/img/home_img/Line.svg'
import Warehousing_Solution from '../../../../assets/img/sectors_img/Renewabl-Eenergy/RenewablEenergy.jpg'
import Ecommerce from '../../../../assets/img/sectors_img/E-commerce/E-commerce.jpg'


export default function SectorSpotlight () {

    useEffect (() =>  {
        
    })

    return (
        <>
        <div className="service-spotlight custom-brokerage-sec section inner-spotlight-sec section-padd-LR overflow" >
            <div className="main-container width-1250 flex">
                <div className="inner-spot-clm-1">
                    <h2 className="sldr-sub-ttl" data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="0">Sector Solutions</h2>
                    <h1 className="js-split-text white">E-commerce and Retail </h1>                    
                    <img src={Line} alt="Line" data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="600"/>
                    <p className="white" data-aos="fade-up" data-aos-duration="600" data-aos-once="true" data-aos-delay="700">Elevating Customer Satisfaction with Innovative Logistics Services</p>
                    <a className="btn inner-spt-btn white" href="#" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true" data-aos-delay="800">Home {' > '} Sectors  {' > '} E-commerce and Retail</a>
                </div>                
            </div>
            <div className="inner-img-sec">                
                <div className="inner-spot-clm-2">                    
                    <img src={Ecommerce} alt="supplyChainImage" className='lToR' data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="1000"/>                    
                </div>
            </div>

        </div>
        
        </>
    )
}