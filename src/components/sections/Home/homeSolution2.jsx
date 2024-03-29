import React, { useEffect } from "react";
import '../../../assets/css/home.css';
import '../../../assets/img/home_img/Home_about.png'
import wareHouse_img from '../../../assets/img/home_img/solutions/WarehousingSolutions.jpg'
import FreeTrade from '../../../assets/img/home_img/solutions/FreeTrade.jpg'
import ForeignTrade from '../../../assets/img/home_img/solutions/ForeignTrade.jpg'
import BespokeSolutions from '../../../assets/img/home_img/solutions/BespokeSolutions.jpg'
import TechDriven from '../../../assets/img/home_img/solutions/Tech-Driven.jpg'
import solutn_icon  from '../../../assets/img/home_img/solutions/solutn_icon.svg'

export default function HomeSolution2() {
  useEffect(() => {
  })

  return (
    <>
      <div className="section solution-sec section-padd-LR">
        <div className="main-container width-1200">
            <div className="solution-grid">

                <div className="solution-bx" data-aos="fade-in" data-aos-duration="900" data-aos-once="true">
                    <img className='' src={wareHouse_img} alt="wareHouse_img" />
                    <a href="/services/multiuser-warehousing" className="sol-btn1">Warehousing<br />Solutions <img className='solution-arrow' src={solutn_icon} alt="wareHouse_img" /></a>
                </div>

                <div className="solution-bx" data-aos="fade-in" data-aos-duration="900" data-aos-once="true">
                    <img className='' src={FreeTrade} alt="wareHouse_img" />
                    <a href="/services/pioneering-duty-free-warehousing-solutions" className="sol-btn2">Free Trade Zone, <br />Mundra SEZ <img className='solution-arrow' src={solutn_icon} alt="wareHouse_img" /></a>
                </div>

                <div className="solution-bx" data-aos="fade-in" data-aos-duration="900" data-aos-once="true">
                    <h3 className="white js-split-text we-offr-txt">Solutions <br />We Offer </h3>
                </div>

                <div className="solution-bx" data-aos="fade-in" data-aos-duration="900" data-aos-once="true">
                    <p className="js-split-text white">Logistics solutions tailored to your business needs for seamless supply chain excellence.</p>
                </div>

                <div className="solution-bx" data-aos="fade-in" data-aos-duration="900" data-aos-once="true">
                    <img className='' src={FreeTrade} alt="RailTransport" />
                    <a href="/services/road-and-rail-transport" className="sol-btn3">Surface & <br />Rail Transport <img className='solution-arrow' src={solutn_icon} alt="wareHouse_img" /></a>
                </div>
                
                <div className="solution-bx" data-aos="fade-in" data-aos-duration="900" data-aos-once="true">
                    <img className='' src={ForeignTrade} alt="wareHouse_img" />
                    <a href="/services/customs-brokerage-and-regulatory-compliance" className="sol-btn4">Customs <br />Brokerage <img className='solution-arrow' src={solutn_icon} alt="wareHouse_img" /></a>
                </div>

                <div className="solution-bx" data-aos="fade-in" data-aos-duration="900" data-aos-once="true">
                    <img className='' src={TechDriven} alt="Tech-Driven" />
                    <a href="/services/customs-brokerage-and-regulatory-compliance#foreign" className="sol-btn5">Customs & Foreign <br />Trade Compliance <img className='solution-arrow' src={solutn_icon} alt="wareHouse_img" /></a>
                </div>

                <div className="solution-bx" data-aos="fade-in" data-aos-duration="900" data-aos-once="true">
                    <img className='' src={BespokeSolutions} alt="BespokeSolutions" />
                    <a href="/services/tech-driven-last-mile-delivery-services" className="sol-btn6">Tech-Driven <br />Last-Mile Delivery <img className='solution-arrow' src={solutn_icon} alt="wareHouse_img" /></a>
                </div>
            </div>
            
        </div>
      </div>
    </>
  );
}