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
                <h3 className='we-offer-txt bond-txt black js-split-text key-fetr-ttl'>Specialised Logistics Solutions for Renewable Energy and Infrastructure Projects:</h3>
                <img className='built-line-img' src={Line} alt="Line" data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="600"/>

                <div className='row built-row T-B-Padding B-padding-o '>
                    <div className='clm-2 solution-clm'>   
                        <h3 data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="900">General and Project Cargo</h3>
                        <p data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="900">Specialised logistics for the transportation and handling of oversized, heavy, or otherwise challenging cargo essential for infrastructure and renewable energy projects.</p>
                        <h3 data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="900">Regulatory Compliance and Documentation</h3>
                        <p data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="900">Expert assistance with the complex regulatory environment surrounding large projects, ensuring compliance and smooth operations.</p>                    
                    </div>

                    <div className='clm-2 built-img-clm'>
                        <img src={Inplant} alt='Inplant' data-aos="fade-in" data-aos-duration="600" data-aos-once="true" data-aos-delay="1000"  />
                    </div>
                </div>     

            </div>
        </div>
                
            
        </>
    )
}