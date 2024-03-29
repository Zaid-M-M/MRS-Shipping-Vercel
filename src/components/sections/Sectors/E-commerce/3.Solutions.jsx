import React, { useEffect } from 'react';
import '../../../../assets/css/Services/MultiuserWarehousing.css'
import '../../../../assets/css/Services/lastMileService.css'
import '../../../../assets/css/sector.css'
import Line from '../../../../assets/img/line_img/Black_Line.svg'
import Inplant from '../../../../assets/img/services_img/LastMileDelivery/Last-MileDeliveryFeatures.jpg'



export default function SectorSolutions () {

    
    return (
        <>
        <div className="custom-bonded-sec2 section-padd-LR overflow sectorSolution-sec">
            <div className="main-container width-1250 built-to-suit-container1">     
                <h3 className='we-offer-txt bond-txt black js-split-text key-fetr-ttl'>Specialised Solutions for the Safe and Efficient Movement of Bulk Materials</h3>
                <img className='built-line-img' src={Line} alt="Line" data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="600"/>

                <div className='row built-row T-B-Padding B-padding-o '>
                    <div className='clm-2 solution-clm'>   
                        <h3 data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="900">Tech-Driven Last-Mile Delivery</h3>
                        <p data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="900">Innovative delivery solutions that address the fast-paced demands of e-commerce and retail, ensuring timely and accurate delivery to the end customer.</p>
                        <h3 data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="900">Duty-Free Warehousing</h3>
                        <p data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="900">Flexible warehousing solutions that support the diverse storage and distribution needs of the retail sector, from inventory management to order fulfilment.</p>                    
                    </div>

                    <div className='clm-2 built-img-clm'>
                        <img src={Inplant} alt='Inplant' data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="1000"/>
                    </div>
                </div>     

            </div>
        </div>
                
            
        </>
    )
}