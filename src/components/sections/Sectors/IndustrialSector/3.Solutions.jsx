import React, { useEffect } from 'react';
import '../../../../assets/css/Services/MultiuserWarehousing.css'
import '../../../../assets/css/Services/lastMileService.css'
import '../../../../assets/css/sector.css'
import Line from '../../../../assets/img/line_img/Black_Line.svg'
import Inplant from '../../../../assets/img/sectors_img/Renewabl-Eenergy/RenewablEenergy_solutions.jpg'



export default function SectorSolutions () {

    
    return (
        <>
        <div className="custom-bonded-sec2 section-padd-LR overflow sectorSolution-sec">
            <div className="main-container width-1250 built-to-suit-container1">     
                <h3 className='we-offer-txt bond-txt black js-split-text key-fetr-ttl'>Specialised Logistics Solutions for the Industrial Sector:</h3>
                <img className='built-line-img' src={Line} alt="Line" data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="600"/>

                <div className='row built-row T-B-Padding B-padding-o '>
                    <div className='clm-2 solution-clm'>   
                        <h3 data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="900">General and Project Cargo</h3>
                        <p data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="900">Logistics services for the transportation and handling of heavy industrial equipment, ensuring safety and efficiency.</p>
                        <h3 data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="900">Tech-Driven Last-Mile Delivery</h3>
                        <p data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="900">Leveraging technology to optimise the final delivery phase, enhancing efficiency and reliability for industrial clients.</p>                    
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