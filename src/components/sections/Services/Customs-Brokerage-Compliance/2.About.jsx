import React from 'react';
import '../../../../assets/css/Services/MultiuserWarehousing.css'
import '../../../../assets/css/Services/RoadRailTransport.css'


export default function About () {
    return (
        <>
        <div className="abt_us-section roadRailAbt-sec section-padd-LR overflow">
            <div className="main-container width-1200 black">
                <div className='services-hdng black roadRailAbt-hdngs custom-hdng' data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="1500">
                    <a href="/services/customs-brokerage-and-regulatory-compliance#customs" data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="1800">Customs<br />Brokerage Service</a>
                    <a href="/services/customs-brokerage-and-regulatory-compliance#foreign" data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="1900">Foreign <br />Trade Compliance</a>
                </div> 

                <h2 className='ttl-45px js-split-text'>Your trusted partner in Gujarat for end-to-end supply chain needs.</h2>     

                <div className='row'>
                    <div className='clm-2'>                        
                        <p className='mob-mrgin-o' data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="400">In the intricate world of global trade, regulatory compliance and documentation stand as pivotal elements, ensuring smooth business operations. At MRS Supply Chain, we understand the complexities and nuances of this domain. Our dedicated services are designed to streamline these processes, making them more efficient and less cumbersome for businesses of all sizes. </p>
                    </div>

                    <div className='clm-2' data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="600">
                        <p className='mob-mrgin-o' data-aos="fade-in" data-aos-duration="500" data-aos-once="true" data-aos-delay="400">By leveraging our expertise in various domain like 100% EOU, SEZ, Public & Private Bonded Warehouse, MOOWR and allied compliances which need very specific expertise to make operation seamless our team of experts help you navigate the maze of international trade regulations and paperwork, ensuring your operations are compliant and efficient.</p>
                    </div>
                </div> 
            </div>
            <div className="main-container width-1250 multiuser-container2 road-abt-contnr2">  
                <div>
                </div>    
                        <div className="user-numbers-sec" data-aos="fade-in" data-aos-delay="400" data-aos-once="true">
                            <div className="user-numbers-dv">                                
                                <h4 className="numbers blue"> 41%</h4>                                                            
                                <p className="grey user-numbers-desc">Dolor sit amet, consectetur adipisci elit</p>                                
                            </div>
                            <div className="user-numbers-dv">                                
                                <h4 className="numbers blue">83%</h4>                                                               
                                <p className="grey user-numbers-desc">Dolor sit amet, consectetur adipisci elit</p>                                
                            </div>
                            <div className="user-numbers-dv">
                                <h4 className="numbers blue">67%</h4>                                                                 
                                <p className="grey user-numbers-desc">Dolor sit amet, consectetur adipisci elit</p>                                
                            </div>
                        </div>        
            </div>
        </div>
                
            
        </>
    )
}